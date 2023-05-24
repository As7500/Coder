import React, { useState, useEffect } from "react";
import "./descp.css";
import Ruby from "../../assets/ruby.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function ruby() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={Ruby} />
            <div className="descp-cont">
              <p className="descp">Ruby</p>
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
            <h1 className="track-h1"> Contribute in Ruby Community?</h1>
            <p>
              <span className="track-p">Join Ruby Community</span> Ruby track
              that help you learn more about Ruby programming by providing
              access to a network of experienced developers who are willing to
              share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the Ruby Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={Ruby} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Ruby</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    Ruby is a dynamic, open source programming language with a
                    focus on simplicity and productivity. It has an elegant
                    syntax that is natural to read and easy to write. Ruby was
                    created as a language of careful balance. Its creator,
                    Yukihiro “Matz” Matsumoto, blended parts of his favorite
                    languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a
                    new language that balanced functional programming with
                    imperative programming. He has often said that he is "trying
                    to make Ruby natural, not simple," in a way that mirrors
                    life. Building on this, he adds: "Ruby is simple in
                    appearance, but is very complex inside, just like our human
                    body." You can read more about the Ruby language on its
                    site.
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

export default ruby;
