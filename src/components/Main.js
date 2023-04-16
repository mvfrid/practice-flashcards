import React from 'react';
import styled from 'styled-components';
import FlashCard from './FlashCard';

const StyledMain = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 25px;
`;

const Main = ({ showQuestion, setShowQuestion, randomQuestion, showAnswer, setShowAnswer }) => {
  return (
    <StyledMain>
      <FlashCard
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        answer={randomQuestion.answer}
        question={randomQuestion.question} />
    </StyledMain>
  );
};

export default Main;