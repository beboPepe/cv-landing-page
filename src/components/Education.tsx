const Education = () => {
  return (
    <section className="bg-zinc-700 p-6 mb-4">
      <div className="bg-indigo-900 border border-gray-300 p-6 max-w-[50rem] mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Education
        </h2>

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
                  Studied key subjects, including Software Engineering, Network
                  Applications, Operating Systems in Practice, Computer Systems
                  Architecture, and Cloud Computing Development.
                </li>
                <li className="mb-2">
                  Acquired extensive programming practice, which remains one of
                  the most valuable skills from my university experience.
                </li>
              </ul>
            </div>
            {/*Item 1*/}
            <div className="m-6 px-20">
              <h3 className="text-xl font-semibold text-gray-400 text-center">
                International Baccalaureate Diploma
              </h3>
              <p className="text-gray-400 text-center italic mb-5">
                Universal American School - Graduated 2012
              </p>
              <ul className="list-disc text-gray-300 mt-2 pl-4">
                <li className="mb-2">
                  Attended high school in Dubai, benefiting from a unique and
                  international environment that fostered cultural appreciation
                  and awareness through diverse friendships.
                </li>
                <li className="mb-2">
                  Participated in a fundraising mission that built a library in
                  Ethiopia; visited the school and met the children we helped,
                  which was a transformative emotional experience.
                </li>
                <li className="mb-2">
                  Served as vice captain of the school's rugby team, playing a
                  crucial role in achieving victory during matches.
                </li>
                <li className="mb-2">
                  Developed a strong interest in the sciences, with electives in
                  physics and biology during the final two years.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
