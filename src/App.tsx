import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import ContentSelection from "./components/ContentSelection";
import Footer from "./components/Footer";

function App() {
  const [] = useState(0);

  return (
    <>
      <Introduction />
      <ContentSelection />
      <Footer />
    </>
  );
}

export default App;
