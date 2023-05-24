import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./fluent.css";
import CoderLogo from "../../assets/CoderLogo.png";
import bash from "../../assets/bash.png";
import C from "../../assets/c.svg";
import cpp from "../../assets/cpp.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import Go from "../../assets/go.svg";
import Rust from "../../assets/rust.png";
import Typescript from "../../assets/typescript.svg";
import elixir from "../../assets/elixir.png";
import ruby from "../../assets/ruby.svg";
import python from "../../assets/python.svg";
import csharp from "../../assets/csharp.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="explore">
      <div className="explore-1">
        <div className="explore-icon">
          <img className="explore-icon-img" src={CoderLogo} />
        </div>
      </div>
      <div className="explore-2">
        <p className="explore-2-h2">
          Explore and get fluent in <br />
          14 programming languages
        </p>
      </div>
      <div className="explore-icon-grid">
        <a className="track">
          <img className="track-img" src={python} />
          <div className="title-pro">Python</div>
        </a>
        <a className="track">
          <img className="track-img" src={javascript} />
          <div className="title-pro">Javascript</div>
        </a>
        <a className="track">
          <img className="track-img" src={java} />
          <div className="title-pro">Java</div>
        </a>
        <a className="track">
          <img className="track-img" src={Go} />
          <div className="title-pro">Go</div>
        </a>
        <a className="track">
          <img className="track-img" src={cpp} />
          <div className="title-pro">C++</div>
        </a>
        <a className="track">
          <img className="track-img" src={csharp} />
          <div className="title-pro">C#</div>
        </a>
        <a className="track">
          <img className="track-img" src={Rust} />
          <div className="title-pro">Rust</div>
        </a>
        <a className="track">
          <img className="track-img" src={C} />
          <div className="title-pro">C</div>
        </a>
        <a className="track">
          <img className="track-img" src={Typescript} />
          <div className="title-pro">Typescript</div>
        </a>
        <a className="track">
          <img className="track-img" src={ruby} />
          <div className="title-pro">Ruby</div>
        </a>
        <a className="track">
          <img className="track-img" src={bash} />
          <div className="title-pro">Bash</div>
        </a>
        <a className="track">
          <img className="track-img" src={elixir} />
          <div className="title-pro">Elixir</div>
        </a>
      </div>
      <div className="explore-icon-bord border-light">
        <a className="explore-all">
          <Link to="/group">Sell all 14 Languages</Link>
        </a>
      </div>
    </div>
  );
}

export default Hero;
