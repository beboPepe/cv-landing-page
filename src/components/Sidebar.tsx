const Sidebar = () => {
  return (
    <section className="bg-zinc-700 text-white p-6">
      <div className="bg-indigo-900 border border-gray-300 rounded-lg p-6 max-w-[50rem] mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-pink-500">
          Skills
        </h1>

        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {" "}
          {/* Programming Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Programming</h3>
            <ul className="list-none list-inside text-gray-300">
              <li className="pl-4">C#</li>
              <li className="pl-4">HTML</li>
              <li className="pl-4">Tailwind CSS</li>
              <li className="pl-4">Python</li>
              <li className="pl-4">React</li>
              <li className="pl-4">JavaScript/TypeScript</li>
              <li className="pl-4">Unity</li>
            </ul>
          </div>
          {/* Soft Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <ul className="list-none list-inside text-gray-300">
              <li className="pl-4">Communication</li>
              <li className="pl-4">Problem Solving</li>
              <li className="pl-4">Adaptability</li>
              <li className="pl-4">Teamwork</li>
              <li className="pl-4">Time Management</li>
            </ul>
          </div>
          {/* Languages */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Languages</h3>
            <ul className="list-none list-inside text-gray-300">
              <li className="pl-4">English</li>
              <li className="pl-4">Portuguese</li>
            </ul>
          </div>
          {/* Hobbies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <ul className="list-none list-inside text-gray-300">
              <li className="pl-4">Rock Climbing</li>
              <li className="pl-4">Slacklining</li>
              <li className="pl-4">Snowboarding</li>
              <li className="pl-4">Hiking</li>
              <li className="pl-4">Cycling</li>
              <li className="pl-4">Jiu Jitsu</li>
              <li className="pl-4">Reading</li>
              <li className="pl-4">Gaming</li>
              <li className="pl-4">beat tech regular</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
