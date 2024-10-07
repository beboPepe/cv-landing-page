import { useState } from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Sidebar from "./Sidebar";

const Component1 = () => (
  <div>
    <WorkExp />
  </div>
);
const Component2 = () => (
  <div>
    <Education />
  </div>
);
const Component3 = () => (
  <div>
    <Sidebar />
  </div>
);

const ContentSelection = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  return (
    <div>
      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSelectedComponent(1)}
          className={`py-2 px-4 ${
            selectedComponent === 1 ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => setSelectedComponent(2)}
          className={`py-2 px-4 ${
            selectedComponent === 2 ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setSelectedComponent(3)}
          className={`py-2 px-4 ${
            selectedComponent === 3 ? "bg-indigo-500 text-white" : "bg-gray-300"
          }`}
        >
          Skills
        </button>
      </div>

      {/* Component Section */}
      <div className="border border-indigo-800">
        {selectedComponent === 1 && <Component1 />}
        {selectedComponent === 2 && <Component2 />}
        {selectedComponent === 3 && <Component3 />}
      </div>
    </div>
  );
};

export default ContentSelection;
