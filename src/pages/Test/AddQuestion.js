// import { Editor as ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";

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
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  width: 60vw;
  height: 100vh;
  position: relative;
  left: 25%;
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
  top: 10px;
`;
const Button = styled.button`
  position: absolute;
  left: 33%;
  top: 90%;
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
    color: black;
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
  margin: 5px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: black;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const Tr = styled.tr``;
const Th = styled.th``;
const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const handleAnswer = (e, editor) => {
    const asdata = editor.getData();
    setAnswer(asdata);
  };
  const handleQuestion = (e, editor) => {
    const data = editor.getData();
    setQuestion(data);
  };
  const isCheck = [
    {
      id: "Đúng",
      name: true,
    },
    {
      id: "Sai",
      name: false,
    },
  ];
  const [bank, setBank] = useState([]);
  const [idBankQuestion, setIdBankQuestion] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/bank-questions")
      .then((response) => {
        console.log(response);
        setBank(response.data.metadata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddQs = () => {
    axios
      .post("http://localhost:4000/api/v1/questions", {
        content: question,
        idBankQuestion: idBankQuestion,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          alert("Thêm câu hỏi thành công!");
        } else {
          alert("Thêm câu hỏi không thành công");
        }
        localStorage.setItem("idQuestion", result.data.metadata.id);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          alert("Thêm câu hỏi không thành công");
        } else {
          alert("Thêm câu hỏi thành công!");
        }
      });
  };
  const idQuestion = localStorage.getItem("idQuestion");
  const handleCompare = () => {
    axios
      .post("http://localhost:4000/api/v1/question-answers", {
        idQuestion: idQuestion,
        answer: answer,
        isCorrect: isCorrect,
      })
      .then((result) => {
        if (result.status === 201) {
          alert("Thêm đáp án thành công!");
        } else {
          alert("Thêm đáp án không thành công");
        }
        console.log(result.data.metadata);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          alert("Thêm đáp án không thành công");
        } else {
          alert("Thêm đáp án thành công!");
        }
      });
  };
  return (
    <Container>
      <Table>
        <Title>Thêm câu hỏi bài thi</Title>
        <Tr>
          <Th>Câu hỏi</Th>
          <CKEditor
            editor={Editor}
            data={question}
            onReady={(editor) => {
              "";
            }}
            onChange={(e, editor) => {
              handleQuestion(e, editor);
            }}
          ></CKEditor>
        </Tr>
        <Tr>
          <Th>Ngân hàng câu hỏi</Th>
          <Autocomplete
            sx={{ width: 650 }}
            options={bank}
            renderInput={(params) => <TextField {...params} />}
            getOptionLabel={(bank) => bank.name}
            onChange={(event, newValue) => {
              setIdBankQuestion(newValue.id);
            }}
            noOptionsText={"Không tìm thấy"}
          />
        </Tr>
        <ButtonQS onClick={handleAddQs}>Hoàn thành</ButtonQS>
        <Tr>
          <Th>Đáp án</Th>
          <CKEditor
            editor={Editor}
            data={answer}
            onReady={(editor) => {
              "";
            }}
            onChange={(e, editor) => {
              handleAnswer(e, editor);
            }}
          ></CKEditor>
          <Autocomplete
            sx={{ width: 300 }}
            options={isCheck}
            renderInput={(params) => <TextField {...params} />}
            getOptionLabel={(isCheck) => isCheck.id}
            onChange={(event, newValue) => {
              setIsCorrect(newValue.name);
            }}
            noOptionsText={"Không tìm thấy"}
          />
        </Tr>
        <Button onClick={handleCompare}>Hoàn thành</Button>
      </Table>
    </Container>
  );
};

export default AddQuestion;
