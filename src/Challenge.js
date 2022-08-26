import React, { useState } from "react";

function Challenge() {
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setCounter(counter + value.length);
    setValue("");
    console.log("counter (from handleSubmit): ", counter);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  // -Add a controlled form that includes:
  // DONE: A text input
  // DONE: A button with the text of “Click Me!”
  // DONE: A paragraph that has a counter that starts at 0
  // DONE: When they input text in the text field and submit, the text input should reset
  // and based on word length, the counter should increment.
  // DONE: The counter will continue to increment based on word length and will never reset back to zero.
  // DONE: So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="textElement"
        onChange={handleChange}
        name=""
        type="text"
        value={value}
      />
      <button>Click Me!</button>
      <p>{counter}</p>
    </form>
  );
}

export default Challenge;
