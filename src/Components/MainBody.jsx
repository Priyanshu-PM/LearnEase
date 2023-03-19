import React from "react";
import {Link} from 'react-router-dom';
import download from "../assets/download.png";

const MainBody = () => {
  return (
    <div class=" pl-15 pr-15 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between space-between">
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p class="uppercase tracking-loose w-full mt-20 text-3xl">Enhanced Online Learning</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Revamp Your Learning with Personalized Support
        </h1>
        <p class=" mt-10 leading-normal text-2xl mb-8">
          Revolutionize your online learning with our platform's face
          recognition and student attention system. Our tailored approach offers
          personalized guidance and support to help you succeed. Join us today
          for a cutting-edge, interactive experience that adapts to your unique
          needs.
        </p>
        <Link to="/select"  class="mx-auto lg:mx-0 hover: bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Learn More
        </Link>
      </div>
      <div class=" w-full md:w-3/5 py-6 text-center">
        <img class="w-full md:w-5/5 z-50" src={download} alt="" />
      </div>
    </div>
  );
};

export default MainBody;
