import React, { useState, useEffect } from "react";
import "./descp.css";
import c from "../../assets/c.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function C() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={c} />
            <div className="descp-cont">
              <p className="descp">C</p>
              {/* <div className="student">
              <img className="stud-icons" src={studl} />
              <span>118,536 student </span>
            </div> */}
            </div>
          </div>
          <div className="tabs">
            <Link className="tabs-1">
              <img className="icons-tab" src={info} />
              <span className="tab-intro">About</span>
            </Link>
            {/* <Link to="/Roadmap" className="tabs-1">
            <img className="icons-tab" src={building} />
            <span className="tab-intro">Roadmap</span>
          </Link> */}
          </div>
        </div>
      </div>
      <div className="track-headerr">
        <div className="track-container">
          <div className="track-flex">
            <h1 className="track-h1"> Contribute in C Community?</h1>
            <p>
              <span className="track-p">Join c Community</span> C track that
              help you learn more about python programming by providing access
              to a network of experienced developers who are willing to share
              their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the C Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={c} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About c</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    C is a general purpose language, used for a wide range of
                    applications, from embedded computers to high-performance
                    computing clusters. C is commonly found in low level
                    applications as it's a good alternative to harder-to-read
                    assembly languages. It can be compiled to assembly to keep
                    the same level of performance, while increasing readability,
                    and providing a small level of safety with static types!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pre">
            <code className="code-pre">
              <img className="code-tab" src={code} />
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C;
