import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

const MainBody = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen rounded-xl">
      <div className="relative flex flex-col sm:flex-col xl:flex-row  h-full w-full overflow-hidden ">
        <div className=" absolute  xl:w-full  h-full z-10 space-y-5">
          <div className="w-2/4 xl:w-full backdrop-blur-sm flex flex-col items-start py-10">
            <p className="text-6xl font-righteous text-fontColor font-bold mb-8">
              Elevate Learning with One Click
            </p>
            <p className="text-lg font-poppins mt-8 text-justify text-fontColor ">
              Our intuitive platform brings students and teachers together,
              providing a seamless learning experience that promotes engagement
              and success. With our innovative features and tools, we are
              committed to helping students and teachers achieve their academic
              goals and unlock their full potential.
            </p>
            <button className="bg-babyPink hover:bg-babyPink mt-4 font-poppins text-white font-bold py-2 px-4 rounded-2xl hover:scale-105 transition-all" onClick={()=> navigate("/select")}>
              Get started
            </button>
            
          </div>
        </div>
        <img
          src={bg}
          alt="background"
          className="object-right absolute h-full w-full object-contain backdrop-blur-sm "
        />
      </div>
    </div>
  );
};

export default MainBody;