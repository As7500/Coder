import React, { useState, useEffect } from "react";
import "./descp.css";
import D from "../../assets/d.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function d() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={D} />
            <div className="descp-cont">
              <p className="descp">D</p>
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
            <h1 className="track-h1"> Contribute in D Community?</h1>
            <p>
              <span className="track-p">Join D Community</span> D track that
              help you learn more about D programming by providing access to a
              network of experienced developers who are willing to share their
              knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the D Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={D} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About D</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    D is a systems programming language with C-like syntax and
                    static typing. It combines efficiency, control and modeling
                    power with safety and programmer productivity. The language
                    was developed originally by Walter Bright and Andrei
                    Alexandrescu since D version 2. D is the culmination of
                    decades of experience implementing compilers for many
                    diverse languages and has a large number of unique features:
                    high level constructs for great modeling power high
                    performance, compiled language
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

export default d;
