import React from "react";

function StatusBanner({ gameStatus, numberOfGuesses, answer }) {
  return (
    <>
      {gameStatus === "won" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{numberOfGuesses === 1 ? '1 guess' : `${numberOfGuesses} guesses`}</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default StatusBanner;
