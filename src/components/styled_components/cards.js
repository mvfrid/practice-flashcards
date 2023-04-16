import styled, { keyframes } from 'styled-components';

const flipVerticalRight = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0);
  }
`;

const flipVerticalLeft = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

export const StyledCard = styled.div`
  background-color: ${(props) => (props.showAnswer ? '#BED5BC' : '#AABFE9')};
  border-radius: 25px;
  color: "black";
  text-align: center;
  padding: 2rem;
  min-width: 500px;
  max-width: 600px;
  min-height: 400px;
  max-height: 1000px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  @media (max-width: 667px) {
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

export const StyledH2 = styled.h2`
  font-size: 32px;
  color: "black";
  font-weight: bold;
  margin-top: 10px;
  backface-visibility: hidden;
`;

export const StyledH3 = styled.h3`
  color: "black";
  margin-bottom: 20px;
  backface-visibility: hidden;
  @media (max-width: 667px) {
    font-size: 16px;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
  color: "black";
  margin-bottom: 20px;
  text-align: left;
  backface-visibility: hidden;
  @media (max-width: 667px) {
    font-size: 16px;
  }
`;
