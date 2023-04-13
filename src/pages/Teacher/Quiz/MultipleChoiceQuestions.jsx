import React, { useState } from "react";

const MultipleChoiceQuestion = ({ questionData }) => {
  return (
    <div>
      <p>{questionData.text}</p>
      <form>
        {questionData.options.map((option, index) => (
          <div key={index}>
            <label>
              <p/>
              {option}
            </label>

          </div>
        ))}
      </form>
    </div>
  );
};

export default MultipleChoiceQuestion;
