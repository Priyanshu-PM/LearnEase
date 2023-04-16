import React from "react";
import {FaPollH} from 'react-icons/fa'
import {MdOutlineQuiz} from 'react-icons/md'
const BelowMain = () => {
  return (
    <div className="block mt-10 h-full w-full font-poppins">
      <div className="">
        <p className="pb-4 w-auto h-auto z-10 text-6xl font-bold text-fontColor my-4 bg-gradient-to-r from-orngColor via-[#F53329] to-babyPink text-transparent bg-clip-text">Let's see how we're helping</p>
      </div>

      {/* Info div starts */}
      <div className="flex flex-col">
        <div className=" flex flex-row  items-center">
          <div className=" text-2xl my-4 stroke-2 stroke-orngColor text-white drop-shadow-3xl"><FaPollH/></div>
          <p className="text-2xl text-[#888692]  px-8">Real time session summary</p>
        </div>
        <div className="w-full h-screen flex flex-row px-2 ">
          <div className="w-1.5 h-relative  bg-gradient-to-tl rounded-lg from-orngColor"></div>
          <div className="flex flex-col">
          <p className="text-5xl font-bold font-rubik p-10 text-[#231a48]">Efficiently recap and <span className="text-orngColor">highlight key point</span> covered during online classes</p>
          <p className="text-2xl text-[#888692]  px-8">Get the most out of your online classes with our real-time session summaries. Our powerful summarization tools help you efficiently recap and highlight key points covered during lectures, ensuring you never miss important information.</p>
          </div>
        </div>
      </div>
      {/* Info div ends */}
      {/* Info div starts */}
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="text-2xl my-4 stroke-2 stroke-green-500 text-white drop-shadow-3xl"><MdOutlineQuiz/></div>
          <p className="text-2xl text-[#888692]  px-8">Live quiz generation</p>

        </div>
        <div className="w-full h-screen flex flex-row px-2">
          <div className="w-1.5 h-screen  bg-gradient-to-tl rounded-lg from-green-500"></div>
          <div className="flex flex-col">
          <p className="text-5xl font-bold font-rubik p-10 text-[#231a48]">Quickly generate<span className="text-green-500"> quizzes based on live sessions</span> to engage students and test their knowledge in real-time</p>
          <p className="text-2xl text-[#888692]  px-8">Elevate your students' learning experience with our live quiz generation feature. Test their knowledge in real-time and reinforce lecture material with quizzes generated from lecture summaries. Engage and motivate your students with interactive learning today!</p>

          </div>
        </div>
      </div>
      {/* Info div ends */}
      {/* Info div starts */}
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="text-2xl my-4 stroke-2 stroke-orngColor text-white drop-shadow-3xl"><FaPollH/></div>
          <p className="text-2xl text-[#888692] px-8">Instant feedback for teachers</p>
        </div>
        <div className="w-full h-screen flex flex-row px-2">
          <div className="w-1.5 h-screen  bg-gradient-to-tl rounded-lg from-orngColor"></div>
          <div>

          <p className="text-5xl font-bold font-rubik p-10 text-[#231a48]">Effortlessly generate live MCQ quizzes from learning sessions to<span className="text-orngColor"> test student knowledge</span> in real-time</p>

          <p className="text-2xl text-[#888692] px-8">Get real-time feedback on student performance with automated quizzes generated from learning sessions. Effortlessly test student knowledge with MCQs and receive instant quiz responses to evaluate student progress and adjust teaching methods accordingly.</p>
          </div>
        </div>
      </div>
      {/* Info div ends */}

      {/* Info div starts */}
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="text-2xl my-4 stroke-2 stroke-green-500 text-white drop-shadow-3xl"><FaPollH/></div>
          <p className="text-2xl text-[#888692]  px-8">Monitoring attentiveness of student</p>
        </div>
        <div className="w-full h-screen flex flex-row px-2">
          <div className="w-1.5 h-screen  bg-gradient-to-tl rounded-lg from-green-500"></div>

          <div>
          <p className="text-5xl font-bold font-rubik p-10 text-[#231a48]">Our powerful tools help <span className="text-green-500">promote focus and enhance learning</span> outcomes for students</p>
          <p className="text-2xl text-[#888692]  px-8">Our facial expression detection technology monitors student attentiveness in real-time, allowing teachers to adjust their approach to enhance learning outcomes. By analyzing facial cues, we promote focus and facilitate effective teaching for each student.</p>
          </div>

        </div>
      </div>
      {/* Info div ends */}
    </div>
  );
};

export default BelowMain;
