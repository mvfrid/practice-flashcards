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

const Main = (props) => {
  console.log('props.randomQuestion', props.randomQuestion);
  return (
    <StyledMain>
      <FlashCard
        answer={props.randomQuestion.answer}
        question={props.randomQuestion.question} />
    </StyledMain>
  );
};

export default Main;