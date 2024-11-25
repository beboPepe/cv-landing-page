const CV = "/PedroCV2024.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white p-6">
      <div className="max-w-[40rem] flex-col mx-auto items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

        <div className="flex flex-col items-center">
          <p className="mb-2">Phone: (+351) 914 122 160</p>
          <p className="mb-2">Cascais, Portugal</p>
        </div>

        <h3 className="text-xl font-semibold text-center mb-4">
          Connect with Me
        </h3>
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="https://github.com/beboPepe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-pineiro-773895a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaLinkedin size={30} />
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
    </footer>
  );
}

export default Footer;
