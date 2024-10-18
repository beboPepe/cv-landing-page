import pp from "../assets/grasses.jpg";
import CV from "../assets/PedroCV2024.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="flex justify-center items-center p-8 text-pink-500 min-h-[700px] bg-zinc-800">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row justify-center items-center lg:items-center">
        {/*Card*/}
        <div className="bg-zinc-300 shadow-lg rounded-lg p-8 flex flex-col justify-between items-center w-96 max-w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={pp}
            alt="Your Picture"
            className="rounded-full w-48 h-48 object-cover mb-6"
          />
          <h1 className="text-3xl font-bold text-center mb-2">Pedro Pineiro</h1>
          <h2 className="text-xl text-black text-center mb-6">
            Software Developer
          </h2>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/beboPepe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-purple-800"
            >
              <FaGithubSquare size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-pineiro-773895a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-purple-800"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href={CV} // Change this to the correct path of your PDF file
              download="My_CV.pdf" // You can customize the file name for the downloaded file
              className="bg-purple-800 text-white font-bold py-2 px-4 rounded hover:bg-pink-500 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/*Text content*/}
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
