import React, { useState } from "react";

const MultipleChoiceQuestion = ({ questionData }) => {
  // console.log(key)
  return (
    <div className=" rounded-lg  space-y-2 font-serif ">
      <p className="text-xl p-3 border-b-2 ">Question:<span className="font-bold">{  questionData.text}</span></p>
      <div className="space-y-2">
        {questionData.options.map((option, index) => (
          <div  key={index} className="px-3">
            <p className="">
              {option}
            </p>
          </div>
        ))}
        </div>
        <div className="block text-[#00e208] bg-[#ddffde] p-3  rounded-b-lg">
        <p className="text-lg">Correct answer: {"  "}<span className="font-bold"> {questionData.correctAnswer}</span></p>
        </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
