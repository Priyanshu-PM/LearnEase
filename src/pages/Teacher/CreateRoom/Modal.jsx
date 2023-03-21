import React, { useState } from "react";
import axios from "axios";

const Modal = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { question, options, answer };
    axios
      .post("/api/questions", data)
      .then((res) => {
        console.log(res);
        // Handle success
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label>Option 1</label>
        <input
          value={options[0]}
          onChange={(e) => handleOptionChange(0, e.target.value)}
        />
        <label>Option 2</label>
        <input
          value={options[1]}
          onChange={(e) => handleOptionChange(1, e.target.value)}
        />
        <label>Option 3</label>
        <input
          value={options[2]}
          onChange={(e) => handleOptionChange(2, e.target.value)}
        />
        <label>Option 4</label>
        <input
          value={options[3]}
          onChange={(e) => handleOptionChange(3, e.target.value)}
        />
        <label>Correct Answer</label>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Modal;