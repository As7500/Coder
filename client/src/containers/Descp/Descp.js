import React, { useState, useEffect } from "react";
import "./descp.css";
import java from "../../assets/java.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function Descp() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={java} />
            <div className="descp-cont">
              <p className="descp">Java</p>
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
            <h1 className="track-h1"> Contribute in Java Community?</h1>
            <p>
              <span className="track-p">Join Coder Community</span> Java track
              that help you learn more about Java programming by providing
              access to a network of experienced developers who are willing to
              share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the Java Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={java} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Java</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    Java is a popular general-purpose programming language that
                    was originally released by Sun Microsystems in 1995. It was
                    designed to be platform-independent, meaning that Java code
                    can be written once and run on any system that has a Java
                    Virtual Machine (JVM) installed. Java is an object-oriented
                    programming language, which means that it is based on the
                    concept of objects that can contain data and code. Java also
                    supports other programming paradigms, such as functional
                    programming and imperative programming.
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

export default Descp;
