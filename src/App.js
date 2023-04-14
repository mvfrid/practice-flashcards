/* eslint-disable max-len */
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './data.json';

import './index.css';

export const App = () => {
  const [randomNumber, setRandomNumber] = useState(0); // initialize with initial value of 0

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * data.questions.length); // change this to generate a random number based on your requirements
    setRandomNumber(newRandomNumber);
  };

  console.log('randomNumber:', randomNumber);

  return (
    <div className="App">
      <Header />
      <Main randomQuestion={data.questions[randomNumber]} />
      <Footer generateRandomNumber={generateRandomNumber} />
    </div>
  );
};
