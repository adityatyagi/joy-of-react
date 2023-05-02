import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// import StatusBanner from "../StatusBanner/StatusBanner";
import Banner from "../Banner/Banner";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log("🚀 ~ file: Game.js:10 ~ answer:", answer);

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [userAttempts, setUserAttempts] = useState([]);
  const [currentWord, setCurrentWord] = useState(() => answer);
  const [gameStatus, setGameStatus] = useState("running");

  function updateUserAttempts(userInput) {
    // get current attempts
    const nextAttempts = [...userAttempts, userInput];
    setUserAttempts(nextAttempts);

    if (userInput.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextAttempts.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function restartHandler() {
    setUserAttempts([]);
    setCurrentWord(sample(WORDS));
    setGameStatus("running");
  }
  return (
    <>
      <Guess answer={currentWord} userAttempts={userAttempts} />
      <Form updateUserAttempts={updateUserAttempts} gameStatus={gameStatus} />
      <p>test</p>
      {gameStatus !== "running" && (
        <Banner gameStatus={gameStatus}>
          {gameStatus === "won" ? (
            <WinBanner
              numberOfGuesses={userAttempts.length}
              onRestart={restartHandler}
            />
          ) : (
            <LostBanner answer={answer} onRestart={restartHandler} />
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
