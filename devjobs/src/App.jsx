import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import topBg from "../public/top-bg.png";
import devjobs from "../public/devjobs.svg";
import moon from "../public/moon.svg";
import sun from "../public/sun.svg";
import { Switch as AntSwitch } from "antd";
import JobList from "./components/JobList";

function App() {
  const [switchsDark, setSwitchsDark] = useState(false);


  function onChange() {
    setSwitchsDark(!switchsDark);

    if (!switchsDark) {
      document.body.style.backgroundColor = "#121721";
    } else {
      document.body.style.backgroundColor = "#F4F6F8";
    }
  }





  return (
    <>

      <div className="TopContainer">
        <div className="topheader">
          <div className="topBg">
            <img src={topBg} alt="" />
          </div>

          <div className="topLogo">
            <img className="devjobs" src={devjobs} alt="" />
            <div className="darkMode">
              <img src={sun} className="sun" alt="" />
              <AntSwitch onChange={onChange} className="darkModeBtn" />
              <img src={moon} className="moon" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <JobList switchsDark={switchsDark} /> */}

    </>
  );
}

export default App;
