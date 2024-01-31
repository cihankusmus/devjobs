import React, { useState } from 'react';
import oval from "../../public/Oval.svg";
import App from "../App"
import topBg from "../../public/top-bg.png";
import devjobs from "../../public/devjobs.svg";
import moon from "../../public/moon.svg";
import sun from "../../public/sun.svg";
import { Switch as AntSwitch } from "antd";

function JobDetail({ job }) {
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

export default JobDetail;