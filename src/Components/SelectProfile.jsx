import React from "react";

import teacherselect from '../assets/teacherselect.png';
import studentselect from '../assets/studentselect.png';


import {Link} from 'react-router-dom';

const SelectProfile = () => {

  return (

    <div className="flex items-center align-center justify-center h-screen space-x-20">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-50">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src={teacherselect}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5 space-y-10">
          <a href="#">
            <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900">
              Continue as Teacher
            </h5>
          </a>
          <div class="flex items-center justify-center">
            <Link
              to="/loginteacher"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue as Teacher
            </Link>
          </div>
        </div>
      </div>

      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-50">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src={studentselect}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5 space-y-10">
          <a href="#">
            <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900">
              Continue as Student
            </h5>
          </a>
          <div class="flex items-center justify-center">
            <Link
              to="/loginstudent"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue as Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProfile;
