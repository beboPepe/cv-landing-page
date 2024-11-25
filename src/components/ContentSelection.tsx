import { useState } from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Skills from "./Skills";
import { FaBriefcase } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

const Component1 = () => (
  <div>
    <WorkExp />
  </div>
);
const Component2 = () => (
  <div>
    <Education />
  </div>
);
const Component3 = () => (
  <div>
    <Skills />
  </div>
);

const ContentSelection = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  return (
    <div className="bg-zinc-700 py-6 sm:p-8">
      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSelectedComponent(1)}
          className={`flex flex-col items-center justify-center py-2 px-4 rounded-full h-20 sm:h-28 w-28 ${
            selectedComponent === 1
              ? "bg-zinc-300 text-pink-500"
              : "bg-purple-800 text-white"
          } transition duration-200 ease-in-out transform hover:scale-110`}
        >
          <FaBriefcase size={30} />
          <span>Work</span>
        </button>
        <button
          onClick={() => setSelectedComponent(2)}
          className={`flex flex-col items-center justify-center py-2 px-4 rounded-full h-20 sm:h-28 w-28 ${
            selectedComponent === 2
              ? "bg-zinc-300 text-pink-500"
              : "bg-purple-800 text-white"
          } transition duration-200 ease-in-out transform hover:scale-110`}
        >
          <IoSchool size={30} />
          <span>Education</span>
        </button>
        <button
          onClick={() => setSelectedComponent(3)}
          className={`flex flex-col items-center justify-center py-2 px-4 rounded-full h-20 sm:h-28 w-28 ${
            selectedComponent === 3
              ? "bg-zinc-300 text-pink-500"
              : "bg-purple-800 text-white"
          } transition duration-200 ease-in-out transform hover:scale-110`}
        >
          <GiSkills size={30} />
          <span>Skills</span>
        </button>
      </div>

      {/* Component Section */}
      <div className="bg-black">
        {selectedComponent === 1 && <Component1 />}
        {selectedComponent === 2 && <Component2 />}
        {selectedComponent === 3 && <Component3 />}
      </div>
    </div>
  );
};

export default ContentSelection;
