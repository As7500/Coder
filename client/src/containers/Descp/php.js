import React, { useState, useEffect } from "react";
import "./descp.css";
import PHP from "../../assets/php.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function php() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={PHP} />
            <div className="descp-cont">
              <p className="descp">PHP</p>
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
            <h1 className="track-h1"> Contribute in PHP Community?</h1>
            <p>
              <span className="track-p">Join PHP Community</span> PHP track that
              help you learn more about PHP programming by providing access to a
              network of experienced developers who are willing to share their
              knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the PHP Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={PHP} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About PHP</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    PHP is a server-side language suited towards web
                    development. The acronym is recursive, standing for PHP:
                    Hypertext Preprocessor. Considerably more versatile than CGI
                    scripting, PHP is often used to add interactivity to plain
                    HTML and bolster web frameworks. The language can be
                    employed on any operating system. PHP is supported by most
                    common web servers and is often handled through an
                    interpreter module. This combines static web code with
                    dynamic inclusions. PHP isn't just a web server framework.
                    It's also useful for command-line scripting (headless
                    parsing) and developing GUIs.
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

export default php;
