// import { useState } from "react";
// import LoginForm from "./components/LoginForm";
import "./App.css";
// import Toggle from "./components/Toggle";
import DigitalClock from "./components/DigitalClock";
import UselessMachine from "./components/UselessMachine/UselessMachine";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div>
        <UselessMachine />
      </div>
      <div className="digitalClock">
        <DigitalClock />
      </div>
    </>
  );

  // example for dark mode
  // return (
  //   <div
  //     className="wrapper"
  //     style={{
  //       // NOTE: This is a just-for-fun mini demo, not a
  //       // full-featured Dark Mode implementation!
  //       "--color-bg": isDarkMode ? "black" : "white",
  //       "--color-text": isDarkMode ? "white" : "black",
  //       "--random-color": isDarkMode ? "green" : "red",
  //     }}
  //   >
  //     <LoginForm />
  //     <Toggle
  //       label="Dark Mode"
  //       checked={isDarkMode}
  //       handleToggle={setIsDarkMode}
  //     />
  //   </div>
  // );
}

export default App;
