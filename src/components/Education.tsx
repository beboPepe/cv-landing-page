import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Education = () => {
  //Array to manage visibility for each item
  const [showDetails, setShowDetails] = useState<boolean[]>([false, false]);

  const toggleDetails = (index: number) => {
    setShowDetails((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  return (
    <section className="bg-zinc-700 text-white p-6 mb-4">
      <div className="max-w-[50rem] mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Education
        </h1>

        {/* Education Listings*/}
        <div className="flex justify-center gap-4">
          <div className="gap-4 flex flex-col">
            {/*Item 1*/}
            <div className="m-6 px-20">
              <h3 className="text-xl font-semibold text-gray-400 text-center">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-400 text-center italic mb-5">
                Leeds Beckett University - 2014 to 2019
              </p>
              {/* Dropdown Button */}
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDetails(0)}
                >
                  {showDetails[0] ? (
                    <IoIosArrowDropupCircle size={35} />
                  ) : (
                    <IoIosArrowDropdownCircle size={35} />
                  )}
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showDetails[0] ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc text-gray-300 mt-2 pl-4">
                  <li className="mb-2">
                    Gained exposure to diverse technologies, enhancing my
                    understanding of computing's role in society.
                  </li>
                  <li className="mb-2">
                    Developed a solid appreciation for mobile network technology
                    and internet routing.
                  </li>
                  <li className="mb-2">
                    Studied key subjects, including Software Engineering,
                    Network Applications, Operating Systems in Practice,
                    Computer Systems Architecture, and Cloud Computing
                    Development.
                  </li>
                  <li className="mb-2">
                    Acquired extensive programming practice, which remains one
                    of the most valuable skills from my university experience.
                  </li>
                </ul>
              </div>
            </div>
            {/*Item 1*/}
            <div className="m-6 px-20">
              <h3 className="text-xl font-semibold text-gray-400 text-center">
                International Baccalaureate Diploma
              </h3>
              <p className="text-gray-400 text-center italic mb-5">
                Universal American School - Graduated 2012
              </p>
              {/* Dropdown Button */}
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDetails(1)}
                >
                  {showDetails[1] ? (
                    <IoIosArrowDropupCircle size={35} />
                  ) : (
                    <IoIosArrowDropdownCircle size={35} />
                  )}
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showDetails[1] ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc text-gray-300 mt-2 pl-4">
                  <li className="mb-2">
                    Attended high school in Dubai, benefiting from a unique and
                    international environment that fostered cultural
                    appreciation and awareness through diverse friendships.
                  </li>
                  <li className="mb-2">
                    Participated in a fundraising mission that built a library
                    in Ethiopia; visited the school and met the children we
                    helped, which was a transformative emotional experience.
                  </li>
                  <li className="mb-2">
                    Served as vice captain of the school's rugby team, playing a
                    crucial role in achieving victory during matches.
                  </li>
                  <li className="mb-2">
                    Developed a strong interest in the sciences, with electives
                    in physics and biology during the final two years.
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

export default Education;
