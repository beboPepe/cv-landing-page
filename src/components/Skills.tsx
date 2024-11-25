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
  return (
    <section className="bg-zinc-700 text-white p-2 sm:p-6">
      <div className="max-w-[40rem] mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>

        {/* Skills Section */}
        <div className="flex flex-col gap-8">
          {/* Technologies */}
          <div className="px-2 pb-6 pt-4 relative border-2 rounded-3xl">
            <h3 className="text-2xl text-center">Technologies</h3>
            <div className="flex items-center justify-center mt-2">
              <ul className="text-gray-300 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Technology List Items */}
                <li className="flex items-center justify-center">
                  <PiFileCSharpDuotone className="mr-2" size={30} />
                  C#
                </li>
                <li className="flex items-center justify-center">
                  <FaHtml5 className="mr-2" size={30} />
                  HTML
                </li>
                <li className="flex items-center justify-center">
                  <RiTailwindCssFill className="mr-2" size={30} />
                  Tailwind CSS
                </li>
                <li className="flex items-center justify-center">
                  <FaPython className="mr-2" size={30} />
                  Python
                </li>
                <li className="flex items-center justify-center">
                  <FaReact className="mr-2" size={30} />
                  React
                </li>
                <li className="flex items-center justify-center">
                  <IoLogoJavascript className="mr-2" size={30} />
                  JavaScript
                </li>
                <li className="flex items-center justify-center">
                  <SiTypescript className="mr-2" size={30} />
                  TypeScript
                </li>
                <li className="flex items-center justify-center">
                  <FaUnity className="mr-2" size={30} />
                  Unity
                </li>
              </ul>
            </div>
          </div>

          {/* Hobbies */}
          <div className="px-2 pb-6 pt-4 border-2 rounded-3xl">
            <h3 className="text-2xl text-center">Hobbies</h3>
            <div className="flex items-center justify-center mt-2">
              <ul className="text-gray-300 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {/* Hobby List Items */}
                <li className="flex items-center justify-center">
                  <GiMountainClimbing className="mr-2" size={30} />
                  Climbing
                </li>
                <li className="flex items-center justify-center">
                  <GiTightrope className="mr-2" size={30} />
                  Slacklining
                </li>
                <li className="flex items-center justify-center">
                  <FaSnowboarding className="mr-2" size={30} />
                  Snowboarding
                </li>
                <li className="flex items-center justify-center">
                  <FaHiking className="mr-2" size={30} />
                  Hiking
                </li>
                <li className="flex items-center justify-center">
                  <GiCycling className="mr-2" size={30} />
                  Cycling
                </li>
                <li className="flex items-center justify-center">
                  <GiKimono className="mr-2" size={30} />
                  Jiu Jitsu
                </li>
                <li className="flex items-center justify-center">
                  <GiBookCover className="mr-2" size={30} />
                  Reading
                </li>
                <li className="flex items-center justify-center">
                  <FaGamepad className="mr-2" size={30} />
                  Gaming
                </li>
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div className="px-2 pb-6 pt-4 relative border-2 rounded-3xl">
            <h3 className="text-2xl text-center">Languages</h3>
            <div className="flex items-center justify-center mt-2">
              <ul className="text-gray-300 grid grid-cols-2 md:grid-cols-2 gap-4">
                {/* Language List Items */}
                <li className="flex items-center">
                  <Flag code="GB" className="mr-2 w-6 h-auto" />
                  English
                </li>
                <li className="flex items-center">
                  <Flag code="BR" className="mr-2 w-6 h-auto" />
                  Portuguese
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
