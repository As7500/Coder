import React, { useState, useEffect } from "react";
import "./descp.css";
import kotlin from "../../assets/kotlin.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function Kotlin() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={kotlin} />
            <div className="descp-cont">
              <p className="descp">Kotlin</p>
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
            <h1 className="track-h1"> Contribute in kotlin Community?</h1>
            <p>
              <span className="track-p">Join kotlin Community</span> Kotlin
              track that help you learn more about python programming by
              providing access to a network of experienced developers who are
              willing to share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the kotlin Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={kotlin} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Kotlin</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    Kotlin was designed and developed by JetBrains, the company
                    behind IntelliJ. It is a language that runs on the JVM which
                    can target versions 6+ (including the Android platform).
                    JetBrains wanted to use a statically typed language which
                    can remove Java boilerplate code, provide modern functional
                    paradigms, and had seamless two-way Java interoperability
                    with their existing codebase. The JVM already had alternate
                    languages like Groovy and Scala but neither fit the bill
                    with their desired criteria, so they built Kotlin.
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

export default Kotlin;
