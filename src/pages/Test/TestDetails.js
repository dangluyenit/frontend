import React, { useState } from "react";
import {
  AnswerQuestion,
  ButtonNext,
  ButtonPre,
  Container,
  Question,
  QuestionCount,
  QuestionSection,
  QuestionText,
  ScoreSection,
} from "./styles";
const TestDetails = () => {
  var questionBank = [
    {
      id: 1,
      question: "Javascript là ngôn ngữ xử lý ở:",
      answer: [
        {
          answerText: "Client",
          isCorrect: true,
        },
        {
          answerText: "Server",
          isCorrect: false,
        },
        {
          answerText: "Server/Client",
          isCorrect: false,
        },
        {
          answerText: "Không có dạng nào",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "Phương thức viết chương trình của Javascript như thế nào:",
      answer: [
        {
          answerText: "Viết riêng một trang",
          isCorrect: false,
        },
        {
          answerText: "Viết chung với HTML",
          isCorrect: false,
        },
        {
          answerText: "Cả 2 dạng A và B",
          isCorrect: true,
        },
        {
          answerText: "Không có dạng nào",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Javascript là ngôn ngữ xử lý ở:",
      answer: [
        {
          answerText: "Client",
          isCorrect: false,
        },
        {
          answerText: "Server",
          isCorrect: false,
        },
        {
          answerText: "Server/Client",
          isCorrect: false,
        },
        {
          answerText: "Không có dạng nào",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question: "Javascript là ngôn ngữ xử lý ở:",
      answer: [
        {
          answerText: "Client",
          isCorrect: false,
        },
        {
          answerText: "Server",
          isCorrect: false,
        },
        {
          answerText: "Server/Client",
          isCorrect: false,
        },
        {
          answerText: "Không có dạng nào",
          isCorrect: false,
        },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const handlePreOption = () => {
    const preQuestion = currentQuestion - 1;
    if (preQuestion === -1) {
      setShowScore(true);
    } else {
      setCurrentQuestion(preQuestion);
    }
  };
  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionBank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Container>
      <Question>
        {showScore ? (
          <ScoreSection>
            Bạn đạt {score} trên {questionBank.length}
          </ScoreSection>
        ) : (
          <QuestionSection>
            <QuestionCount>
              <span>{currentQuestion + 1}</span>/{questionBank.length}
            </QuestionCount>
            <QuestionText>
              {questionBank[currentQuestion].question}
            </QuestionText>
            <AnswerQuestion>
              {questionBank[currentQuestion].answer.map((answer) => (
                <button
                  className="btn-choice"
                  onClick={() => handleAnswerResponse(answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </AnswerQuestion>
            <ButtonPre onClick={handlePreOption}>Trước</ButtonPre>
            <ButtonNext onClick={handleNextOption}>Kế tiếp</ButtonNext>
          </QuestionSection>
        )}
      </Question>
    </Container>
  );
};

export default TestDetails;
