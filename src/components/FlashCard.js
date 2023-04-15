import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledAnswerButton } from './styled_components/buttons.js';

const flipVerticalRight = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const flipVerticalLeft = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0);
  }
`;

const StyledCard = styled.div`
  background-color: ${(props) => (props.showAnswer ? '#BED5BC' : '#AABFE9')};
  border-radius: 25px;
  color: "black";
  text-align: center;
  padding: 2rem;
  min-width: 500px;
  max-width: 600px;
  min-height: 400px;
  max-height: 700px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  @media (max-width: 667px) {
    margin: .8rem;
    padding: 1.2rem;
    min-width: 200px;
    min-height: 300px;
  }
  &.animate {
    animation: ${flipVerticalRight} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
  &.animate-reverse {
    animation: ${flipVerticalLeft} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
`;

const StyledH2 = styled.h2`
  font-size: 32px;
  color: "black";
  font-weight: bold;
  margin-top: 10px;
  backface-visibility: hidden;
`;

const StyledH3 = styled.h3`
  color: "black";
  margin-bottom: 20px;
  backface-visibility: hidden;
  @media (max-width: 667px) {
    font-size: 16px;
  }
`;

const StyledP = styled.p`
  font-size: 18px;
  color: "black";
  margin-bottom: 20px;
  text-align: left;
  backface-visibility: hidden;
  @media (max-width: 667px) {
    font-size: 16px;
  }
`;

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false); // State for showing answer
  const [showQuestion, setShowQuestion] = useState(true); // State for showing question

  // Function to toggle showing answer
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    setShowQuestion(false);
    const cardElement = document.getElementById('flashcard');
    cardElement.classList.add('animate');
    setTimeout(() => {
      cardElement.classList.remove('animate');
    }, 400); // Duration of the animation in milliseconds
  };

  // Function to go back to showing question
  const goBackToQuestion = () => {
    setShowAnswer(false);
    setShowQuestion(true);
    const cardElement = document.getElementById('flashcard');
    cardElement.classList.add('animate-reverse');
    setTimeout(() => {
      cardElement.classList.remove('animate-reverse');
    }, 400); // Duration of the animation in milliseconds
  };

  return (
    <StyledCard id="flashcard" showAnswer={showAnswer} showQuestion={showQuestion} className={showAnswer ? 'animate' : 'animate-reverse'}>
      {showQuestion && (
        <>
          <StyledH2>Question</StyledH2>
          <StyledH3>{question}</StyledH3>
          <StyledAnswerButton type="button" onClick={toggleAnswer}>
                See answer
          </StyledAnswerButton>
        </>
      )}
      {showAnswer && (
        <>
          <StyledH2>Answer</StyledH2>
          <StyledP>{answer}</StyledP>
          <StyledAnswerButton
            type="button"
            onClick={goBackToQuestion}
            style={{ margin: '10px' }}>
                See question
          </StyledAnswerButton>
        </>
      )}
    </StyledCard>
  );
};

export default FlashCard;

/*
  return (
    <div className={showQuestion ? 'flip-vertical-right' : ''}>
      <StyledCard showAnswer={showAnswer} showQuestion={showQuestion}>
        {showQuestion && (
          <div className={showQuestion ? 'flip-vertical-right' : ''}>
            <StyledH2>Question</StyledH2>
            <StyledH3>{question}</StyledH3>
            <StyledAnswerButton type="button" onClick={toggleAnswer}>
                See answer
            </StyledAnswerButton>
          </div>
        )}
        {showAnswer && (
          <div className={showAnswer ? 'flip-vertical-right' : ''}>
            <StyledH2>Answer</StyledH2>
            <StyledP>{answer}</StyledP>
            <StyledAnswerButton
              type="button"
              onClick={goBackToQuestion}
              style={{ margin: '10px' }}>
                See question
            </StyledAnswerButton>
          </div>
        )}
      </StyledCard>
    </div>
  );
};
*/