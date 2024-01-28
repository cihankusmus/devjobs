import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import topBg from "../public/top-bg.png";
import devjobs from "../public/devjobs.svg";
import moon from "../public/moon.svg";
import sun from "../public/sun.svg";
import { Switch as AntSwitch } from "antd";
import nav from "../public/navigate.png";
import search from "../public/search.png";
import oval from "../public/Oval.svg";
import huni from "../public/huni.svg";
import searchBtn from "../public/searchBtn.svg";
// import { genHoverStyle } from 'antd/es/input/style';
import Modal from "react-modal";
import data from "./data";
import tik from "../public/tik.png";

Modal.setAppElement("#root");

function App() {
  const [switchsDark, setSwitchsDark] = useState(false);

  function JobDetails() {
    return (
      <Routes>
        {data.map((job) => (
          <Route
            key={job.id}
            path={`/${job.id}-${job.company}`}
            element={<JobDetail job={job} />}
          />
        ))}
      </Routes>
    );
  }

  function JobDetail({ job }) {
    return (
      <>
        <div className="container">
          <div
            className="topJobDetail"
            style={
              switchsDark
                ? { backgroundColor: "#19202D" }
                : { backgroundColor: "#FFF" }
            }
          >
            <img src={job.logo} alt="" />
            <div className="topJob">
              <h2
                className="tobJobDetailh2"
                style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
              >
                {job.company}
              </h2>
              <p className="tobJobDetailP">{job.company}.com</p>
            </div>
            <a href={job.website}>
              <button
                style={
                  switchsDark
                    ? { backgroundColor: "#363b41b8", color: "#FFF" }
                    : {
                        backgroundColor: "rgba(89, 100, 224, 0.1)",
                        color: "#5964E0",
                      }
                }
              >
                <p className="topJobBtn">Company Site</p>
              </button>
            </a>
          </div>

          <div
            className="jobDetail"
            style={
              switchsDark
                ? { backgroundColor: "#19202D" }
                : { backgroundColor: "#FFF" }
            }
          >
            <div className="postInfo">
              <div className="postedAtDetail">
                <p className="postedP">{job.postedAt}</p>
                <img src={oval} alt="" />
                <p className="postedP2">{job.contract}</p>
              </div>
              <div className="jobDetailApply">
                <h1
                  style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
                >
                  {job.position}
                </h1>
                <button className="applyNow">Apply Now</button>
              </div>
              <p className="location">{job.location}</p>
              <button className="applyNowMobile">Apply Now</button>
            </div>
            <h2 style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}>
              Requirements
            </h2>
            <p>{job.requirements.content}</p>
            <ul className="jobDetailUl">
              {job.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2 style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}>
              What You Will Do
            </h2>
            <ol className="jobDetailOl">
              {job.role.items.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="jobDetailBottom"
            style={
              switchsDark
                ? { backgroundColor: "#19202D" }
                : { backgroundColor: "#FFF" }
            }
          >
            <div className="jobDetailB">
              <div className="jobDetailBottomInfo">
                <h3
                  style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
                >
                  {job.position}
                </h3>
                <p>So Digital Inc.</p>
              </div>

              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function JobList() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [titleFilter, setTitleFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [isFullTime, setIsFullTime] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const [visibleJobs, setVisibleJobs] = useState(12);

    const handleSearch = () => {
      const newFilteredData = data.filter((job) => {
        const filterValue = titleFilter.toLowerCase();
        const titleMatch =
          job.position.toLowerCase().includes(filterValue) ||
          job.company.toLowerCase().includes(filterValue);
        const locationMatch = job.location
          .toLowerCase()
          .includes(locationFilter.toLowerCase());
        const fullTimeMatch =
          !isFullTime || job.contract.toLowerCase() === "full time";

        return titleMatch && locationMatch && fullTimeMatch;
      });

      setFilteredData(newFilteredData);
    };

    function resetInput() {
      setLocationFilter("");
      setTitleFilter("");
    }

    const handleLoadMore = () => {
      setVisibleJobs((VisibleJobs) => VisibleJobs + 3);
    };

    const handleModalClick = () => {
      setModalIsOpen(true);
    };

    const handleModalClose = () => {
      setModalIsOpen(false);
    };

    if (!filteredData) {
      return null;
    }

    return (
      <div className="jobs">
        <div
          className="header"
          style={
            switchsDark
              ? { backgroundColor: "#19202D" }
              : { backgroundColor: "#FFF" }
          }
        >
          <div className="header-left">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Filter by title, companies, expertise…"
              style={
                switchsDark
                  ? { backgroundColor: "#19202D", color: "#FFF" }
                  : { backgroundColor: "#FFF" }
              }
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </div>
          <div className="line"></div>

          <div className="header-middle">
            <img src={nav} alt="" />
            <input
              type="text"
              placeholder="Filter by location…"
              style={
                switchsDark
                  ? { backgroundColor: "#19202D", color: "#FFF" }
                  : { backgroundColor: "#FFF" }
              }
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>
          <div className="line"></div>

          <div className="header-right">
            <button
              className={`checkbox-button ${isFullTime ? "checked" : ""}`}
              onClick={() => setIsFullTime(!isFullTime)}
              style={
                switchsDark
                  ? { backgroundColor: "rgba(54, 59, 65, 0.72)" }
                  : { backgroundColor: "#F4F6F8" }
              }
            >
              <img src={tik} alt="" />
            </button>
            <p
              className="pcP"
              style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
            >
              Full Time Only
            </p>
            <p
              className="mobileP"
              style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
            >
              Full Time
            </p>
            <button
              onClick={() => {
                handleSearch();
                resetInput();
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div
          className="headerMobile"
          style={
            switchsDark
              ? { backgroundColor: "#19202D" }
              : { backgroundColor: "#FFF" }
          }
        >
          <div className="header-leftMobile">
            <input
              type="text"
              placeholder="Filter by title…"
              style={
                switchsDark
                  ? { backgroundColor: "#19202D", color: "#FFF" }
                  : { backgroundColor: "#FFF" }
              }
              value={titleFilter}
              onChange={(x) => setTitleFilter(x.target.value)}
            />
            <div className="headerLeftinR">
              <button
                style={
                  switchsDark
                    ? { backgroundColor: "#19202D" }
                    : { backgroundColor: "#FFF" }
                }
                onClick={handleModalClick}
              >
                <img src={huni} alt="" />
              </button>

              <button
                onClick={() => {
                  handleSearch();
                  resetInput();
                }}
                className="mobileSearch"
              >
                <img src={searchBtn} alt="" />
              </button>
            </div>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="modal overlay"
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 1000,
              },
              content: switchsDark
                ? { backgroundColor: "#19202D", borderRadius: "6px" }
                : { backgroundColor: "#FFF", borderRadius: "6px" },
            }}
          >
            <div className="header-middleMobile">
              <img src={nav} alt="" />
              <input
                type="text"
                placeholder="Filter by location…"
                style={
                  switchsDark
                    ? { backgroundColor: "#19202D", color: "#FFF" }
                    : { backgroundColor: "#FFF" }
                }
                value={locationFilter}
                onChange={(x) => setLocationFilter(x.target.value)}
              />
            </div>

            <div className="mobileLine"></div>

            <div className="header-rightMobile">
              <button
                className={`checkbox-button ${isFullTime ? "checked" : ""}`}
                onClick={() => setIsFullTime(!isFullTime)}
                style={
                  switchsDark
                    ? { backgroundColor: "rgba(54, 59, 65, 0.72)" }
                    : { backgroundColor: "#F4F6F8" }
                }
              >
                <img src={tik} alt="" />
              </button>
              <p
                className="mobileP"
                style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
              >
                Full Time Only
              </p>
            </div>
            <div className="modalBtn">
              <button
                onClick={() => {
                  handleSearch();
                  handleModalClose();
                }}
                className="modalBtn"
              >
                Search
              </button>
            </div>
          </Modal>
        </div>

        {filteredData.slice(0, visibleJobs).map((job) => (
          <Link to={`/${job.id}-${job.company}`} key={job.id}>
            <div
              className="job"
              style={
                switchsDark
                  ? { backgroundColor: "#19202D" }
                  : { backgroundColor: "#FFF" }
              }
            >
              <div className="jobsLogo">
                <img src={job.logo} alt="" />
              </div>
              <div className="postedAt">
                <p className="postedP">{job.postedAt}</p>
                <img src={oval} alt="" />
                <p className="postedP2">{job.contract}</p>
              </div>
              <p
                className="position"
                style={switchsDark ? { color: "#FFF" } : { color: "#19202D" }}
              >
                {job.position}
              </p>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
            </div>
          </Link>
        ))}

        <div className="bottomBtn">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>
    );
  }

  function onChange() {
    setSwitchsDark(!switchsDark);

    if (!switchsDark) {
      document.body.style.backgroundColor = "#121721";
    } else {
      document.body.style.backgroundColor = "#F4F6F8";
    }
  }

  return (
    <Router>
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

        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/*" element={<JobDetails />}>
            <Route path=":company" element={<JobDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
