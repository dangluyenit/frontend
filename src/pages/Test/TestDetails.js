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
import { GrNext, GrPrevious } from "react-icons/gr";
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
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionBank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };
  const handlePreOption = () => {
    const preQuestion = currentQuestion - 1;
    setCurrentQuestion(preQuestion);
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
              <span>{currentQuestion}</span>/{questionBank.length}
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
          </QuestionSection>
        )}
        <ButtonPre onClick={handlePreOption}>
          <GrPrevious />
        </ButtonPre>
        <ButtonNext onClick={handleNextOption}>
          <GrNext />
        </ButtonNext>
      </Question>
    </Container>
  );
};

export default TestDetails;
