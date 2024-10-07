const WorkExp = () => {
  return (
    <section className="bg-gray-600 text-white p-6">
      <div className="bg-indigo-900 border border-gray-300 rounded-lg p-6 max-w-[50rem] mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Work Experience</h1>

        {/* Job Listings */}
        <div className="flex justify-center">
          <div className="gap-4 flex flex-col">
            {/* Job 1 */}
            <div className="p-4 px-20">
              <h3 className="text-2xl text-center">Software Developer</h3>
              <p className="text-gray-400 mb-5 text-center italic">
                ITCH Pet (Leeds, UK) - October 2019 to October 2020
              </p>
              <ul className="list-disc text-gray-300 mt-2 pl-4">
                <li className="mb-2">
                  Built and maintained web pages using .NET MVC, sharpening both
                  backend and frontend development skills.
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

            {/* Job 2 */}
            <div className="p-4 px-20">
              <h3 className="text-2xl text-center">Teacher</h3>
              <p className="text-gray-400 mb-5 text-center italic">
                Algorithmics (Algarve, PT) - February 2023 to Dec 2023
              </p>
              <ul className="list-disc text-gray-300 mt-2 pl-4">
                <li className="mb-2">
                  Developed a strong foundation in recognizing and responding to
                  students’ individual needs and learning styles.
                </li>
                <li className="mb-2">
                  Created an engaging classroom environment that fostered
                  student participation and enthusiasm.
                </li>
                <li className="mb-2">
                  Enhanced communication and interpersonal skills, valuable for
                  future career endeavors.
                </li>
                <li className="mb-2">
                  Adapted teaching methods to cater to diverse learning styles,
                  promoting inclusivity and understanding.
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="p-4 px-20">
              <h3 className="text-2xl text-center">Delivery Rider (Bicycle)</h3>
              <p className="text-gray-400 mb-5 text-center italic">
                Deliveroo (Leeds,UK) - June 2015 to June 2015
              </p>
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
    </section>
  );
};

export default WorkExp;
