import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResultRow({ answer, word }) {
  /**
   * check if the word is exactly same as the answer
   *  if yes - all cells green
   *  if no - check if the characters in the word are present in the answer
   *    if yes - check if the index is also same as in the aswer
   *      if yes - green
   *      if no - orange
   *    if no - grey
   */

  return (
    <p className="guess">
      {range(5).map((num) => {
        let cellStatus = "";

        // check if the characters in the word are present in the answer
        if (answer.includes(!!word ? word[num]: null)) {
          // check if the index is also same as in the answer
          if (answer.indexOf(!!word ? word[num] : null) === num) {
            cellStatus = "correct";
          } else {
            cellStatus = "misplaced";
          }
        } else {
          cellStatus = word ? "incorrect" : "";
        }
        return (
          <span key={crypto.randomUUID()} className={`cell ${cellStatus}`}>
            {word ? word[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

function Guess({ answer, userAttempts }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <GuessResultRow
            answer={answer}
            key={crypto.randomUUID()}
            word={userAttempts[num]}
          />
        );
      })}
    </div>
  );
}

export default Guess;
