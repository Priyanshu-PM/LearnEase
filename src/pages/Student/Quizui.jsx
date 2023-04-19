import React from "react";
import { BiTime } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
const Quizui = () => {
  return (
    <>
      <div className="w-4/6 flex flex-col mx-auto">
        {/* info card for quiz */}
        <div className="p-4">
          <div className="flex items-center font-rubik font-normal">
            <p className="flex items-center py-1 px-2 rounded-md text-xs justify-between text-green-600 bg-green-100 w-fit">
              <BiTime />
              <span className="pl-1">2:30am</span>
            </p>
            <p className="ml-4 flex items-center py-1 px-2 rounded-md text-xs justify-between text-pink-600 bg-pink-100 w-fit">
              <BsCalendar2Date />
              <span className="pl-1">5 April, 2023</span>
            </p>
          </div>

          <div className="pt-4">
            <h1 className="text-sm text-gray-400">Stared quiz on</h1>
            <h1 className="text-4xl font-rubik capitalize font-bold">
              Scanline Algorithm
            </h1>
          </div>

          <div className="pt-4 font-poppins">
            <p className="text-sm text-gray-500">
              Session conducted by:{" "}
              <span className="pl-1 capitalize text-black font-medium ">
                john
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Total questions:{" "}
              <span className="pl-1 capitalize text-black font-medium ">
                10
              </span>
            </p>
          </div>
        </div>
        
        <div className="px-6 mt-10">

        <p className="text-2xl font-rubik font-normal text-gray-500">Questions:</p>
        </div>
        {/* parent div for all questions */}
        <div className="px-6">
          {/* start Div for single question */}
        <div className="pb-8">  
          <h3 className="text-xl font-poppins tracking-wide mb-4 font-medium text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, assumenda minima eius cumque amet ut unde consectetur omnis perspiciatis quis.
          </h3>
          <ul className=" items-center flex-col w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
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
                  Driver License{" "}
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-id"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  State ID
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-millitary"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-millitary"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Millitary
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-passport"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Passport
                </label>
              </div>
            </li>
          </ul>
          <button className="px-2 py-1 rounded-md bg-red-50 text-red-500 mt-4">Clear response</button>
        </div>
          {/* end Div for single question */}
          

        </div>
        
      </div>
    </>
  );
};

export default Quizui;
