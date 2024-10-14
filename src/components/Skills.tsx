import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import { PiFileCSharpDuotone } from "react-icons/pi";
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaSnowboarding,
  FaHiking,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaUnity } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import Flag from "react-world-flags";
import {
  GiKimono,
  GiMountainClimbing,
  GiCycling,
  GiTightrope,
  GiBookCover,
} from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";

const Skills = () => {
  // Array to manage visibility for each skill category
  const [showDetails, setShowDetails] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleDetails = (index: number) => {
    setShowDetails((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <section className="bg-zinc-700 text-white p-6">
      <div className="max-w-[50rem] mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-500">
          Skills
        </h1>

        {/* Skills Section */}
        <div className="flex flex-col gap-4 justify-items-center">
          {/* Programming Skills */}
          <div className="p-4">
            <h3 className="text-2xl text-center">Technologies</h3>

            {/* Button */}
            <div className="flex justify-center">
              <div role="button" tabIndex={0} onClick={() => toggleDetails(0)}>
                {showDetails[0] ? (
                  <IoIosArrowDropupCircle size={35} />
                ) : (
                  <IoIosArrowDropdownCircle size={35} />
                )}
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showDetails[0] ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex items-center justify-center">
                <ul className="text-gray-300 mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <li className="mb-2 flex items-center justify-center">
                    <PiFileCSharpDuotone className="mr-2" size={30} />
                    C#
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <FaHtml5 className="mr-2" size={30} />
                    HTML
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <RiTailwindCssFill className="mr-2" size={30} />
                    Tailwind CSS
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <FaPython className="mr-2" size={30} />
                    Python
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <FaReact className="mr-2" size={30} />
                    React
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <IoLogoJavascript className="mr-2" size={30} />
                    JavaScript
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <SiTypescript className="mr-2" size={30} />
                    TypeScript
                  </li>
                  <li className="mb-2 flex items-center justify-center">
                    <FaUnity className="mr-2" size={30} />
                    Unity
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="p-4">
            <h3 className="text-2xl text-center">Hobbies</h3>

            {/* Button */}
            <div className="flex justify-center">
              <div role="button" tabIndex={0} onClick={() => toggleDetails(3)}>
                {showDetails[3] ? (
                  <IoIosArrowDropupCircle size={35} />
                ) : (
                  <IoIosArrowDropdownCircle size={35} />
                )}
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showDetails[3] ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex justify-center">
                <ul className="text-gray-300 mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <li className=" flex items-center">
                    <GiMountainClimbing size={30} />
                    Rock Climbing
                  </li>
                  <li className="flex items-center">
                    <GiTightrope size={30} />
                    Slacklining
                  </li>
                  <li className="flex items-center">
                    <FaSnowboarding size={30} />
                    Snowboarding
                  </li>
                  <li className="mb-2 flex items-center">
                    <FaHiking size={30} />
                    Hiking
                  </li>
                  <li className="mb-2 flex items-center">
                    <GiCycling size={30} />
                    Cycling
                  </li>
                  <li className="mb-2 flex items-center">
                    <GiKimono size={30} />
                    Jiu Jitsu
                  </li>
                  <li className="mb-2 flex items-center">
                    <GiBookCover size={30} />
                    Reading
                  </li>
                  <li className="mb-2 flex items-center">
                    <FaGamepad size={30} />
                    Gaming
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="p-4">
            <h3 className="text-2xl text-center">Languages</h3>

            {/* Button */}
            <div className="flex justify-center">
              <div role="button" tabIndex={0} onClick={() => toggleDetails(2)}>
                {showDetails[2] ? (
                  <IoIosArrowDropupCircle size={35} />
                ) : (
                  <IoIosArrowDropdownCircle size={35} />
                )}
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showDetails[2] ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="flex justify-center">
                <ul className="text-gray-300 mt-2 pl-4 space-y-4">
                  <li className="mb-2 flex items-center">
                    <Flag code="GB" className="mr-2 w-6 h-auto" />
                    English
                  </li>
                  <li className="mb-2 flex items-center">
                    <Flag code="BR" className="mr-2 w-6 h-auto" />
                    Portuguese
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;