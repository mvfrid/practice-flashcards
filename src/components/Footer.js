import React from 'react';
import styled from 'styled-components';
// import { StyledNextButton } from "./styled_components/buttons.js";
import { StyledAnswerButton } from './styled_components/buttons.js';

const StyledFooter = styled.div`
  background-color: #2a1452;
  margin: auto;
  padding: 1rem;
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled.span`
  color: white;
  align-self: flex-start;
`;

const Footer = ({ generateRandomNumber }) => {
  const handleNextQuestion = () => {
    generateRandomNumber(); // call the generateRandomNumber function when the button is clicked
  };
  return (
    <StyledFooter>
      <StyledAnswerButton
        type="button"
        onClick={handleNextQuestion}
        style={{ fontSize: '25px', fontStyle: 'bold', padding: '14px 20px' }}>
        Next question
      </StyledAnswerButton>
      <StyledLink>
        Built by{' '}
        <a href="https://matilda-frid-portfolio.netlify.app/">Matilda Frid</a>{' '}
        (& ChatGPT)
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
