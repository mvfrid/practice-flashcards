// import React from "react";
import styled from 'styled-components';

export const StyledAnswerButton = styled.button`
  background-color: #ea4c89;
  border-radius: 12px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 18px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover,
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
`;

export const StyledNextButton = styled.button`
  padding: 2px;
`;
