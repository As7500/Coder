import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./hero.css";
import action from "../../assets/action.png";
import community from "../../assets/community.png";
import backgroundImage from "../../assets/bg-tracks.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="vision">
      <div className="vision-1">
        <p className="vision-2">
          {" "}
          <img src={community} />
          Join Our Coder Community !
        </p>
        <p className="vision-3">
          <span className="vision-4">
            Accelerate your learning with Coder's community.
          </span>{" "}
          <p className="vision-5">
            Ask questions, explore ideas, and get to know millions of other
            developers upskilling on Community.
          </p>
        </p>
        <div className="vision-button">
          <a className="vision-button-1" href="">
            Explore RoadMap
          </a>
          <a className="vision-button-2">Explore languages</a>
        </div>
      </div>
      <div className="vision-img">
        <img className="vision-img-action" src={action} />
      </div>
    </div>
  );
}

export default Hero;
