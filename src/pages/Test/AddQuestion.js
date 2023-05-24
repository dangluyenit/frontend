// import { Editor as ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  // const [isCorrect, setIsCorrect] = useState(false);
  const handleAnswer = (e, editor) => {
    const asdata = editor.getData();
    setAnswer(asdata);
  };
  const handleQuestion = (e, editor) => {
    const data = editor.getData();
    setQuestion(data);
  };
  const handleAddQs = () => {
    axios
      .post("http://localhost:4000/api/v1/questions", {
        content: question,
        idBankQuestion: "32074D02-BD38-45EE-92E4-08EA767827BC",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCompare = () => {
    axios
      .post("http://localhost:4000/api/v1/question-answers", {
        idQuestion: "B5E4684F-3C02-4BBD-AC0B-99CBCD29273D",
        answer: answer,
        isCorrect: false,
      })
      .then((result) => {
        console.log(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Table>
        <Title>Thêm câu hỏi bài thi</Title>
        <tr>
          <th>Câu hỏi</th>
          <CKEditor
            editor={Editor}
            data={question}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(e, editor) => {
              handleQuestion(e, editor);
            }}
          ></CKEditor>
        </tr>
        <ButtonQS onClick={handleAddQs}>Hoàn thành</ButtonQS>
        <tr>
          <th>Đáp án</th>
          <CKEditor
            editor={Editor}
            data={answer}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(e, editor) => {
              handleAnswer(e, editor);
            }}
          ></CKEditor>
        </tr>
        <Button onClick={handleCompare}>Hoàn thành</Button>
      </Table>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* background: transparent;
  border-radius: 20px;
  box-shadow: 0 0 10px black; */
  width: 50vw;
  height: 90vh;
  position: relative;
  left: 30%;
  top: 30px;
  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: rgb(238, 238, 238);
  }
`;
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 50px;
`;
const Button = styled.button`
  position: absolute;
  left: 30%;
  top: 85%;
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const ButtonQS = styled.button`
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
export default AddQuestion;
