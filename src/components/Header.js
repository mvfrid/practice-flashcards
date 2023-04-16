import React from 'react';
import styled from 'styled-components';
import { StyledNextButton } from './styled_components/buttons.js';

const StyledHeader = styled.div`
  background-color: #2a1452;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  width: 100%;
  height: 150px;
  position: relative;
  top: 0;
  left: 0;
`;

const StyledHeading = styled.h1`
  color: white;
  font-size: 32px;
  margin-top: 20px;
  max-width: 300px;
  @media (max-width: 667px) {
    font-size: 26px;
    margin-top: 10px;
  }
`;

const Header = ({ generateRandomNumber }) => {
  const handleNextQuestion = () => {
    generateRandomNumber(); // call the generateRandomNumber function when the button is clicked
  };
  return (
    <StyledHeader>
      <StyledHeading>Interview Practice Flashcards</StyledHeading>
      <StyledNextButton
        type="button"
        onClick={handleNextQuestion}
        style={{ fontSize: '25px', fontStyle: 'bold', padding: '14px 20px' }}>
        Next question
      </StyledNextButton>
    </StyledHeader>
  );
};

export default Header;

