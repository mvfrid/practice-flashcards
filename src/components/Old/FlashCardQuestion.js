import React from 'react';
// import styled from "styled-components";
import { StyledAnswerButton } from '../styled_components/buttons.js';
import { StyledCard, StyledH2, StyledH3 } from '../styled_components/cards.js';
// import { StyledP } from "../styled_components/cards.js";

const FlashCardQuestion = ({ question, toggleAnswer, showQuestion }) => {
  return (
    <StyledCard showQuestion={showQuestion}>
      <StyledH2>Question</StyledH2>
      <StyledH3>{question}</StyledH3>
      <StyledAnswerButton type="button" onClick={toggleAnswer}>
        See answer
      </StyledAnswerButton>
    </StyledCard>
  );
};

export default FlashCardQuestion;
