import React, { useEffect, useRef, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import {
  AnswerQuestion,
  ButtonClearn,
  ButtonSubmit,
  Container,
  CountQuestion,
  Input,
  Question,
  QuestionSection,
  QuestionText,
  TestTitle,
  Timer,
} from "./styles";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { useNavigate, useParams } from "react-router-dom";

const TestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkValues, setCheckValues] = useState([]);
  function handleChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setCheckValues((pre) => [...pre, value]);
      console.log({ checkValues });
    }
  }
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + " : " + seconds;
  };
  const [countdown, setCountDown] = useState();

  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [countdown]);
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      handleCheckAnswer();
    }
    // eslint-disable-next-line
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
            console.log(res);
            res.map((questionAndAnswer) => {
              console.log(questionAndAnswer);
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
        console.log(response);
        localStorage.setItem("test", response.data.metadata.name);
        localStorage.setItem("count", response.data.metadata.quantityQuestion);
        setCountDown(response.data.metadata.examDuration);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  const code = localStorage.getItem("code");

  function handleCheckAnswer() {
    const temp = [];
    checkValues.map((id) => {
      return temp.push({ id: id });
    });
    axios
      .post("http://localhost:4000/api/v1/question-answers/score-calculation", {
        idTest: id,
        answers: temp,
        studentCode: code,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("score", response.data.metadata.score);
        navigate("/result/details");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const title = localStorage.getItem("test");
  const count = localStorage.getItem("count");
  return (
    <Container>
      <TestTitle>Tên bài thi : {title}</TestTitle>
      <CountQuestion>Số lượng câu hỏi : {count}</CountQuestion>
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
      <Timer>{formatTime(countdown)}</Timer>
      <ButtonSubmit onClick={handleCheckAnswer}>Nộp bài</ButtonSubmit>
    </Container>
  );
};

export default TestDetails;
