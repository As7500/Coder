import React, { useState, useEffect } from "react";
import "./descp.css";
import javascript from "../../assets/javascript.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function Javascript() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={javascript} />
            <div className="descp-cont">
              <p className="descp">Java Script</p>
              {/* <div className="student">
                <img className="stud-icons" src={studl} />
                <span>118,536 student </span>
              </div> */}
            </div>
          </div>
          <div className="tabs">
            <Link to="/about" className="tabs-1">
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
            <h1 className="track-h1"> Contribute in Java script Community?</h1>
            <p>
              <span className="track-p">Join Coder Community</span> Javascript
              track that help you learn more about Javascript programming by
              providing access to a network of experienced developers who are
              willing to share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">
                  Join the Java script Community
                </span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={javascript} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Javascript</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    JavaScript is a high-level, interpreted programming language
                    used to create interactive web pages and applications. It is
                    widely used for both client-side and server-side development
                    and allows for dynamic and responsive user interfaces.
                    JavaScript code can be added to HTML pages or run on the
                    server-side with Node.js. It supports various programming
                    paradigms, including object-oriented, functional, and
                    procedural programming, and has a vast ecosystem of
                    libraries and frameworks that make it one of the most
                    popular programming languages in the world.
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

export default Javascript;
