import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #2a1452;
  color: white;
  text-align: center;
  padding: 1.2rem;
  width: 100%;
  height: 120px;
  position: relative;
  top: 0;
  left: 0;
`;

const StyledHeading = styled.h1`
  color: white;
  font-size: 32px;
  margin-top: 20px;
  @media (max-width: 667px) {
    font-size: 26px;
    margin-top: 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>Interview Practice Flashcards</StyledHeading>
    </StyledHeader>
  );
};

export default Header;
