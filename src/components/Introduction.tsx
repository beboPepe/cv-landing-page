import pp from "../assets/grasses.jpg";
import { FaGithub, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="flex justify-center items-center p-8 text-pink-500 min-h-[800px]">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row justify-center items-center lg:items-center">
        {/* Left side: Card with Picture, Name, Job Title, and Links */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between items-center w-96 max-w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={pp}
            alt="Your Picture"
            className="rounded-full w-48 h-48 object-cover mb-6"
          />
          <h1 className="text-3xl font-bold text-center mb-2">Pedro Pineiro</h1>
          <h2 className="text-xl text-gray-600 text-center mb-6">
            Software Engineer
          </h2>
          <div className="flex space-x-4">
            <FaGithub size={30} />
            <FaGithubSquare size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="lg:w-1/2 lg:ml-12 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">
            Hello, here's who I am & what I do
          </h2>
          <p className="text-lg text-white max-w-96 lg:max-w-none lg:text-left">
            I am passionate about building scalable web applications and always
            eager to learn new technologies. I’m currently focused on creating
            sleek user interfaces with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
