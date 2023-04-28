import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

// create a map of the answer
let answerMap = {};

for(let i=0; i<answer.length; i++) {
  /**
   * {
   *  index: character
   * }
   */
  answerMap[i] = answer[i];
}
function Game() {
  const [userAttempts, setUserAttempts] = useState(new Array(5).fill(null));
  function updateUserAttempts(userInput) {
    // get current attempts
    const nextAttempts = [...userAttempts];

    // replace the empty strings in the array in the order they are added
    // iterate over the array and if the node is a empty string, then replace
    for(const [index,item] of nextAttempts.entries()) {
      if(!item) {
        nextAttempts[index] = userInput;
        break;
      }
    }
    setUserAttempts(nextAttempts);
  }
  return (
    <>
     <Guess answer={answer} userAttempts={userAttempts}/>

      <Form updateUserAttempts={updateUserAttempts} />
    </>
  );
}

export default Game;
