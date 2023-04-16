import React from 'react';
// import styled from "styled-components";
import { StyledAnswerButton } from '../styled_components/buttons.js';
import { StyledCard, StyledH2, StyledP } from '../styled_components/cards.js';

const FlashCardAnswer = ({ answer, goBackToQuestion, showAnswer }) => {
  return (
    <StyledCard showAnswer={showAnswer}>
      <StyledH2>Answer</StyledH2>
      {answer.map((item) => (
        <StyledP key={item.page}>{item.content}</StyledP>
      ))}
      <StyledAnswerButton
        type="button"
        onClick={goBackToQuestion}
        style={{ margin: '10px' }}>
        See question
      </StyledAnswerButton>
    </StyledCard>
  );
};

export default FlashCardAnswer;

/*
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StyledCard = styled.div`
  border-radius: 25px;
  font-size: 72px;
  color: "black";
  font-weight: bold;
  margin-top: 10px;
  backface-visibility: hidden;
`;

export const Card = ({ headline, description }) => {
  return (
    <StyledCard>
      <h1>{headline}</h1>
      <p>{description}</p>
      <p>mer hoppihopp</p>
    </StyledCard>
  )
}

export const FlashCardAnswer = () => {
  console.log('hej');
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable>
      <Card
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <Card
        description="React Carousel with Server Side Rendering Support – Part 2"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      <Card
        description="React Carousel with Server Side Rendering Support – Part 1"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <Card
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
    </Carousel>
  )
}
*/