import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  return (
    <div className="w-full h-14 flex items-center justify-between text-fontColor">
      <div className="flex-start">
        <p className="text-2xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </p>
      </div>
      <div className="flex w-2/6 items-center justify-around">
        <Link
          to="/about"
          className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-fontColor
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 font-semibold font-poppins"
        >
          About us
        </Link>
        <button className="bg-orngColor hover:bg-orngColor hover:scale-105 transition-all font-poppins text-white font-bold py-2 px-4 rounded-2xl" onClick={()=> navigate("/select")}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
