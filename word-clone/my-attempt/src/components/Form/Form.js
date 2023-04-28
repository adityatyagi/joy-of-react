import React, {useState} from "react";

function Form({updateUserAttempts}) {
  const [userInput, setUserInput] = useState('');
  function submitHandler(event) {
    event.preventDefault();
    updateUserAttempts(userInput.toUpperCase());

    // reset the form to inital state
    setUserInput('');
  }
  return (
    <form onSubmit={submitHandler}  className="guess-input-wrapper">
    <label htmlFor="user-input">Enter Guess</label>
      <input type="text" id="user-input" maxLength="5" minLength="5" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
      <button type="submit"></button>
    </form>
  );
}

export default Form;
