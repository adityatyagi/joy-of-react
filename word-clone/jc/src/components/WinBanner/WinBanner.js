import React from "react";

function WinBanner({ numberOfGuesses, onRestart }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses === 1 ? "1 guess" : `${numberOfGuesses} guesses`}
        </strong>
        .<button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}

export default WinBanner;
