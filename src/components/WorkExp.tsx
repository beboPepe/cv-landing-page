import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const WorkExp = () => {
  //Array to manage visibility for each job
  const [showDetails, setShowDetails] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const toggleDetails = (index: number) => {
    setShowDetails(
      (prev) => prev.map((item, i) => (i === index ? !item : item)) // Toggle only the clicked job
    );
  };

  return (
    <section className="bg-zinc-700 text-white p-6">
      <div className="max-w-[40rem] mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center ">
          Work Experience
        </h1>

        {/* Job Listings*/}
        <div className="flex justify-center">
          <div className="gap-8 flex flex-col">
            {/* Job 1 */}
            <div className="py-4 px-4 md:px-10 items-center relative border-2 rounded-3xl">
              <h3 className="text-2xl text-center">Software Developer</h3>
              <p className="text-gray-400 text-center italic mb-2">
                ITCH Pet (Leeds, UK) - October 2019 to October 2020
              </p>
              {/* Button */}
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDetails(0)}
                  className="absolute bottom-[-24px] flex justify-center text-pink-500"
                >
                  {showDetails[0] ? (
                    <IoMdArrowDropupCircle size={35} />
                  ) : (
                    <IoMdArrowDropdownCircle size={35} />
                  )}
                </div>
              </div>

              {/* Dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showDetails[0] ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc text-gray-300 mt-2 pl-4">
                  <li className="mb-2">
                    Built and maintained web pages using .NET MVC, sharpening
                    both backend and frontend development skills.
                  </li>
                  <li className="mb-2">
                    Collaborated with a team of 5 developers, consistently
                    delivering features on time.
                  </li>
                  <li className="mb-2">
                    Enhanced mobile usability by implementing responsive designs
                    with CSS and JavaScript.
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="py-4 px-4 md:px-10 items-center relative border-2 rounded-3xl">
              <h3 className="text-2xl text-center">Teacher</h3>
              <p className="text-gray-400 text-center italic mb-2">
                Algorithmics (Algarve, PT) - February 2023 to Dec 2023
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDetails(1)}
                  className="absolute bottom-[-24px] flex justify-center text-pink-500"
                >
                  {showDetails[1] ? (
                    <IoMdArrowDropupCircle size={35} />
                  ) : (
                    <IoMdArrowDropdownCircle size={35} />
                  )}
                </div>
              </div>

              {/* Dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showDetails[1] ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc text-gray-300 mt-2 pl-4">
                  <li className="mb-2">
                    Developed a strong foundation in recognizing and responding
                    to students’ individual needs and learning styles.
                  </li>
                  <li className="mb-2">
                    Created an engaging classroom environment that fostered
                    student participation and enthusiasm.
                  </li>
                  <li className="mb-2">
                    Enhanced communication and interpersonal skills, valuable
                    for future career endeavors.
                  </li>
                  <li className="mb-2">
                    Adapted teaching methods to cater to diverse learning
                    styles, promoting inclusivity and understanding.
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 3 */}
            <div className="py-4 px-4 md:px-10 items-center relative border-2 rounded-3xl">
              <h3 className="text-2xl text-center">Delivery Rider (Bicycle)</h3>
              <p className="text-gray-400 text-center italic mb-2">
                Deliveroo (Leeds,UK) - June 2015 to June 2015
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleDetails(2)}
                  className="absolute bottom-[-24px] flex justify-center text-pink-500"
                >
                  {showDetails[2] ? (
                    <IoMdArrowDropupCircle size={35} />
                  ) : (
                    <IoMdArrowDropdownCircle size={35} />
                  )}
                </div>
              </div>

              {/* Dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showDetails[2] ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="list-disc text-gray-300 mt-2 pl-4">
                  <li className="mb-2">
                    Enhanced time management skills by efficiently handling
                    multiple orders and deliveries.
                  </li>
                  <li className="mb-2">
                    Developed strong customer service abilities by addressing
                    inquiries and complaints professionally.
                  </li>
                  <li className="mb-2">
                    Demonstrated problem-solving skills by navigating challenges
                    such as adverse weather conditions.
                  </li>
                  <li className="mb-2">
                    Improved physical stamina through the demands of fast-paced
                    delivery work.
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

export default WorkExp;
