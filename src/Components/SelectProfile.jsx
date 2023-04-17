import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const SelectProfile = () => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");

  const isSignupDisabled = !selectedValue;

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  const divClick = (type) => {
    setSelectedValue(type);
  }

  return (
    <div className=" p-10 mb-5 justify-center  h-screen items-center align-center flex flex-row flex-grow flex-wrap  grid-flow-row  gap-6 font-poppins">
      <Link to={'/'} className="absolute left-2 top-2 text-2xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </Link>
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-50">
        <h5 className="pt-5 text-xl text-center font-serif tracking-tight text-gray-900">
          Continue as a Teacher or Student
        </h5>

        <div className="my-5 flex flex-row flex-grow flex-wrap  grid-flow-row  gap-6 justify-around align-center p-5">
          <label className="">
          <div
            className={` relative border w-40 h-35 p-5 justify-center items-center rounded-lg hover:bg-pink-100 hover:border-babyPink hover:cursor-pointer ${
              selectedValue === "teacher"
                ? "bg-pink-100 border-babyPink"
                : "bg-white"
            }`} 
          >
              <input
                type="radio"
                value="teacher"
                checked={selectedValue === "teacher"}
                onChange={handleOptionChange}
                className="accent-babyPink focus:accent-babyPink absolute top-1 right-1"
                />
          <div className="object-center font-serif">I am a Teacher</div>
          </div>
              </label>
              <label >
          <div
            className={`relative border w-40 h-35 p-5  rounded-lg hover:bg-pink-100 hover:border-babyPink hover:cursor-pointer ${
              selectedValue === "student"
                ? "bg-pink-100 border-babyPink"
                : "bg-white"
            }`}
          >
              <input
                type="radio"
                value="student"
                checked={selectedValue === "student"}
                onChange={handleOptionChange}
                className="accent-babyPink focus:accent-babyPink absolute top-1 right-1"
              />
              <div className="object-center font-serif">I am a Student</div>
          </div>
            </label>
        </div>

        <div className="px-5 pb-5 space-y-5">
          <div className="flex items-center justify-center">
            <button
              onClick={() => navigate(`/${selectedValue}/signup`)}
              disabled={isSignupDisabled}
              className={`w-2/4 text-white bg-babyPink hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-babyPink dark:hover:bg-pink-500 
              ${
                isSignupDisabled && "opacity-40 cursor not allowed hover:cursor-not-allowed"
              }`}
            >
              <span>Create an account</span>
            </button>

          </div>
          <div className="mt-3" >

          <p className="text-xs text-center text-gray-800">Already have an account? <button onClick={() => navigate(`/${selectedValue}/login`)} 
          disabled={isSignupDisabled}
          className={` ${isSignupDisabled && "opacity-40 cursor not allowed"}`}>login In</button></p>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SelectProfile;
