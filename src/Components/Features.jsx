import React from "react";

import image1 from "../assets/image1.png";
import onlinestudy from "../assets/onlinestudy.png";

const Features = () => {


  return (
    <div className="bg-white py-8">
      <div className="max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          What We Provide
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="mt-15 space-y-10">
          <div className="flex flex-wrap shadow-xl">
            <div className="w-6/6 sm:w-1/2 p-6 align-center justify-center shadow-xl space-y-10">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
              Interactive Assessments
              </h3>
              <p className="text-gray-600 mb-8 left text-center">
              Our interactive assessment platform offers engaging and interactive assessments with immediate feedback, allowing students to learn from their mistakes and reinforce their understanding of key concepts. Teachers can also track student progress and performance, identify areas for improvement, and provide targeted support and guidance to help students succeed.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 shadow-xl">
              <img
                className="w-full md:w-5/5 z-50"
                src={onlinestudy}
                alt="e-learning"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row shadow-xl">
            <div className="w-full sm:w-1/2 p-6 mt-0 shadow-xl">
              <img
                className="w-full md:w-5/5 z-50"
                src={image1}
                alt="attentiveness"
              />
            </div>
              <div className="align-middle shadow-xl w-full sm:w-1/2 p-6 mt-20 space-y-10">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
                Real-time Analytics
                </h3>
                <p className="text-gray-600 mb-8 text-center">
                Our platform provides real-time analytics to help teachers track student progress, engagement, and identify areas for improvement. Teachers can easily monitor individual student progress, compare class-wide performance over time, and use data-driven insights to inform instructional decisions and promote student success.
                </p>
                <br/>
                <br/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
