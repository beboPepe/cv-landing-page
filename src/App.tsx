import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import ContentSelection from "./components/ContentSelection";

function App() {
  const [] = useState(0);

  return (
    <>
      <Introduction />
      <ContentSelection />
    </>
  );
}

export default App;
