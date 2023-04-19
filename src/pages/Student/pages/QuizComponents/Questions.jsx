import React from "react";

const Questions = ({question}) => {
    console.log("question", question)
  return (
    <div className="pb-8">
      <h3 className="text-xl font-poppins tracking-wide mb-4 font-medium text-gray-900 dark:text-white">
      {question.text}
      </h3>
      <ul className=" items-center flex-col w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {question.options.map((option, optionIndex) => (
        <li key={optionIndex} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className=" hover:cursor-pointer flex items-center pl-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-license"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {option}
            </label>
          </div>
        </li>
      ))}
        
      </ul>
      <button className="px-2 py-1 rounded-md bg-red-50 text-red-500 mt-4">
        Clear response
      </button>
    </div>
  );
};

export default Questions;
