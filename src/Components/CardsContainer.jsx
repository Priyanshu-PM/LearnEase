import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  const FeaturesList = [
    {
      title: "Personalized Learning Path",
      summary:
        "Our platform creates a personalized learning path that adapts to your pace, preferences, and learning style. By analyzing your performance and providing feedback specific to your needs, the platform ensures that you receive the content that matches your goals and objectives, and helps you achieve your learning outcomes faster.",
    },
    {
      title: "Progress Tracking",
      summary:
        " Our platform tracks your progress in real-time and provides detailed feedback and analytics on your performance. This allows you to monitor your progress, identify areas where you need improvement, and adjust your learning plan accordingly. With this feedback, you can stay on track and achieve your goals more efficiently.",
    },
    {
      title: "Face Recognition Technology",
      summary:
        "Our platform uses sophisticated face recognition technology to analyze your engagement level and personalize your learning experience. By monitoring your facial expressions, eye movements, and other physiological cues, the system adapts to your learning style and preferences, ensuring that you receive the content that matches your needs.",
    },
    {
      title: "Student Attention System",
      summary:
        "Our platform features a student attention system that tracks your progress and provides feedback to keep you focused and engaged. The system offers insights into your attention level, identifying areas where you may need additional support, so you can stay motivated and achieve your goals.",
    },
  ];

  return (
    <div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            What we offer
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500 w-64 opacity-75 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-10 flex flex-row flex-grow flex-wrap  grid-flow-row space-y-10 gap-10">
            {FeaturesList.map((Feature, index) => (
              <Cards
                title={Feature.title}
                text={Feature.summary}
                key={Feature.title + index}
              />
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsContainer;
