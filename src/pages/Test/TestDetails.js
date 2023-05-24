import React, { useEffect, useRef, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  AnswerQuestion,
  ButtonClearn,
  ButtonSubmit,
  Container,
  Input,
  Question,
  QuestionSection,
  QuestionText,
  Timer,
} from "./styles";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { useNavigate, useParams } from "react-router-dom";

const TestDetails = ({ seconds }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkValues, setCheckValues] = useState([]);
  function handleChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setCheckValues((pre) => [...pre, value]);
    }
  }
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + " : " + seconds;
  };
  const [countdown, setCountDown] = useState({
    examDuration: "",
  });
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);
  const uncheckAnswer = (event) => {
    const value = event.target;
    setCheckValues((pre) => {
      return [...pre.filter((remove) => remove === value)];
    });
    let allRadioButtons = document.querySelectorAll(".radioButtons");
    allRadioButtons.forEach((value) => (value.checked = false));
  };
  const [listQuestionAndAnswer, setListQuestionAndAnswer] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/test-questions/tests/${id}`)
      .then(async (result) => {
        const listTestQuestion = result.data.metadata;

        await Promise.all(
          listTestQuestion.map(async (testQuestion) => {
            try {
              return await axios.get(
                `http://localhost:4000/api/v1/questions/${testQuestion.idQuestion}/answers`
              );
            } catch (error) {
              console.log(error);
            }
          })
        )
          .then((res) => {
            const temp = [];
            res.map((questionAndAnswer) => {
              return temp.push({
                question: questionAndAnswer.data.metadata.content,
                answers: questionAndAnswer.data.metadata.questionAnswers,
              });
            });

            setListQuestionAndAnswer(temp);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/tests/${id}`)
      .then((response) => {
        setCountDown(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  const code = localStorage.getItem("code");

  const handleCheckAnswer = (e) => {
    e.preventDefault();
    const temp = [];
    checkValues.map((id) => {
      return temp.push({ id: id });
    });
    axios
      .post("http://localhost:4000/api/v1/question-answers/check-answers", {
        idTest: id,
        answers: temp,
        studentCode: code,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Question>
        <QuestionSection>
          {listQuestionAndAnswer.map((data) => (
            <>
              <QuestionText>
                {ReactHtmlParser(data.question)}
                <BsQuestionCircleFill />
              </QuestionText>
              {data.answers.map((answer) => (
                <AnswerQuestion tabIndex="0">
                  <Input
                    type="radio"
                    value={answer.id}
                    name={answer.idQuestion}
                    onChange={handleChange}
                    className="radioButtons"
                  />
                  {ReactHtmlParser(answer.answer)}
                </AnswerQuestion>
              ))}
              <ButtonClearn onClick={uncheckAnswer}>
                Xoá đáp án vừa chọn
              </ButtonClearn>
            </>
          ))}
        </QuestionSection>
      </Question>
      <Timer>{formatTime()} </Timer>
      <ButtonSubmit onClick={handleCheckAnswer}>Nộp bài</ButtonSubmit>
    </Container>
  );
};

export default TestDetails;
