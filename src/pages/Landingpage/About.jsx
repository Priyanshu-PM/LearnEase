import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = () => {

  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:py-16 lg:px-8 shadow-xl flex align-center space-y-10 justify-center h-screen">
      <div className="max-w-screen-xl mx-auto text-center items-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          StudyAI
        </h2>
        <p className="mt-10 text-lg text-gray-500">
          StudyAI is an online platform dedicated to providing enhanced
          learning experiences to students and teachers alike. Our platform
          offers a wide range of features and tools that enable students to
          learn and teachers to teach more effectively in an online setting.
        </p>
        <div className="mt-10">
          <div className="justify-center">
            <div className="">
              <h3 className="text-lg font-medium text-gray-900">
                Personalized Learning
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Our platform offers a personalized and adaptive learning
                experience, with a variety of multimedia resources and
                interactive tools to support your learning journey.
              </p>
            </div>
            <div>
              <h3 className="mt-10 text-lg font-medium text-gray-900">
                Teacher Support
              </h3>
              <p className="mt-5 text-base text-gray-500">
                We offer a variety of tools and resources to support teachers in
                their teaching efforts, including customizable lesson plans,
                real-time analytics, and collaborative tools to facilitate
                communication and feedback with students.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <p className="text-base text-gray-500">
              We believe that online learning should be engaging, interactive,
              and accessible to everyone, and we strive to create an environment
              that fosters collaboration and knowledge-sharing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
