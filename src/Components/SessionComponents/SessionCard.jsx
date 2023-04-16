import React from "react";
import { useNavigate } from "react-router-dom";

import Card from ".";

const SessionCard = ({ title, author, time, clgclass, image, extra }) => {
  const navigate = useNavigate();

  const handleViewRoom = () => {
    navigate("/");
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <div className=" flex h-full w-full flex-row justify-between xl:justify-between">
              <p className="text-lg font-bold text-navy-700 dark:text-white">
                {" "}
                {title}{" "}
              </p>
            </div>
            <div className="flex flex-col justify-between ">
              <p className="mt-2 text-sm font-medium text-gray-600 md:mt-2">
                By {author}{" "}
              </p>
              <div className="mt-2 w-full h-full flex flex-row  justify-between space-x-32">
                <p className=" text-sm font-medium text-gray-600 ">
                  {clgclass}{" "}
                </p>
                <p className=" text-sm font-medium text-gray-600 dark:text-white ">
                  {" "}
                  {time}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-col md:items-center lg:flex-row lg:justify-center xl:flex-col 2xl:items-center 3xl:flex-row 3xl:items-center 3xl:justify-center">
          <button
            onClick={handleViewRoom}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SessionCard;
