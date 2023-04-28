import React from "react";

function GuessResultRow({ answer, word }) {
  const wordBreakDown = !!word ? word?.split("") : new Array(5).fill(null);

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
      {wordBreakDown.map((item, index) => {
        let cellStatus = "incorrect";

        // check if the characters in the word are present in the answer
        if (answer.includes(item)) {
          // check if the index is also same as in the answer
          if (answer.indexOf(item) === index) {
            cellStatus = "correct";
          } else {
            cellStatus = "misplaced";
          }
        }
        return (
          <span key={crypto.randomUUID()} className={`cell ${cellStatus}`}>
            {item}
          </span>
        );
      })}
    </p>
  );
}

function Guess({ answer, userAttempts }) {
  return (
    <div className="guess-results">
      {userAttempts.map((item) => {
        return (
          <GuessResultRow
            answer={answer}
            key={crypto.randomUUID()}
            word={item}
          />
        );
      })}
    </div>
  );
}

export default Guess;
