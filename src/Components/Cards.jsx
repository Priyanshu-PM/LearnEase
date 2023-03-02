import React from 'react';

const Cards = ({title, text}) => {
  return (
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink space-y-3 rounded-lg shadow-2xl mt-10">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden space-y-5">
            
            <div class="w-full font-bold text-xl text-gray-800 px-6 text-center ">
              {title}
            </div>
            <p class="text-gray-800 text-base px-6  text-center">
              {text}
            </p>
        </div>
        <div class="flex-none  bg-white  overflow-hidden  p-6">
          <div class="flex items-center justify-center">
            <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full my-3 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              See Details
            </button>
          </div>
        </div>
      </div>
  )
}

export default Cards;