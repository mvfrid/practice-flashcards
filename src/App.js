/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import data from './data.json';

import './index.css';

export const App = () => {
  const [randomNumber, setRandomNumber] = useState(0); // initialize with initial value of 0
  const [showQuestion, setShowQuestion] = useState(true); // State for showing question
  const [showAnswer, setShowAnswer] = useState(false); // State for showing answer

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * data.questions.length);
    setRandomNumber(newRandomNumber);
    setShowQuestion(true);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <Header generateRandomNumber={generateRandomNumber} />
      <Main randomQuestion={data.questions[randomNumber]} showQuestion={showQuestion} setShowQuestion={setShowQuestion} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
    </div>
  );
};
