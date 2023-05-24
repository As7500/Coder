import React, { useState, useEffect } from "react";
import "./descp.css";
import Typescript from "../../assets/typescript.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function typescript() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={Typescript} />
            <div className="descp-cont">
              <p className="descp">Typescript</p>
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
            <h1 className="track-h1"> Contribute in Typescript Community?</h1>
            <p>
              <span className="track-p">Join Typescript Community</span>{" "}
              Typescript track that help you learn more about Typescript
              programming by providing access to a network of experienced
              developers who are willing to share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the Typescript Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={Typescript} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Typescript</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    TypeScript (TS) is a superset of JavaScript (JS), created at
                    Microsoft in response to frustration developing large-scale
                    applications in JS. In a large JS project, knowing what
                    properties your own objects have, what arguments your
                    functions take (and what type they need to be) can become
                    difficult. Similarly, since there is no ability to
                    intelligently inspect JS code, when you include a package
                    (like from npm), you have to keep the documentation up so
                    you know what methods are available and what arguments they
                    take. TS solves these issues.
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

export default typescript;
