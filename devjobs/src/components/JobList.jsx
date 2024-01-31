import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data";
import tik from "../../public/tik.png";
import searchBtn from "../../public/searchBtn.svg";
import nav from "../../public/navigate.png";
import search from "../../public/search.png";
import oval from "../../public/Oval.svg";
import huni from "../../public/huni.svg";
import Modal from "react-modal";
import App from "../App"
import topBg from "../../public/top-bg.png";
import devjobs from "../../public/devjobs.svg";
import moon from "../../public/moon.svg";
import sun from "../../public/sun.svg";
import { Switch as AntSwitch } from "antd";


Modal.setAppElement("#root");

function JobList() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [titleFilter, setTitleFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [isFullTime, setIsFullTime] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const [visibleJobs, setVisibleJobs] = useState(12);
    const [switchsDark, setSwitchsDark] = useState(false);


    function onChange() {
        setSwitchsDark(!switchsDark);

        if (!switchsDark) {
            document.body.style.backgroundColor = "#121721";
        } else {
            document.body.style.backgroundColor = "#F4F6F8";
        }
    }




    const handleSearch = () => {
        const newFilteredData = data.filter((job) => {
            const filterValue = titleFilter.toLowerCase();
            const titleMatch =
                job.position.toLowerCase().includes(filterValue) || job.company.toLowerCase().includes(filterValue);
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
                            <p className="location">{job.city} - {job.location}</p>
                        </div>
                    </Link>
                ))}

                <div className="bottomBtn">
                    <button onClick={handleLoadMore}>Load More</button>
                </div>
            </div>
        </>
    );
}

export default JobList;