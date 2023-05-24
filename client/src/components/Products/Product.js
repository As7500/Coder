import React from "react";
import "./product.css";
import logo from "../../assets/CoderLogo.png";
import res from "../../assets/res.svg";
import resume from "../../assets/resume.svg";
import codee from "../../assets/codee.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="product-cont">
        <div className="left-cont">
          <div className="left-intro">
            <img className="product-logo" src={logo} />
            <div className="left-head">
              <h1 className="explore-2-h2">Our Other Product</h1>
              <p
                className="left-p
              "
              >
                Solve coding exercises and get mentored to develop fluency in
                your chosen programming languages. Here is Our Other products
                which help you in your programming journey
              </p>
            </div>
          </div>
          <h2 className="prod">Here you can visit...</h2>
          <section className="prod-sec">
            <Link to="/vid" className="prod-action">
              <img className="product-logo" src={res} />
              <p className="prod-desp">
                Make a confrence call with your friends
              </p>
            </Link>
            <Link to="/all" className="prod-action">
              <img className="product-logo" src={codee} />
              <p className="prod-desp">
                Code editor Edit your Simple web code!
              </p>
            </Link>
            <Link to="/resume" className="prod-action">
              <img className="product-logo" src={resume} />
              <p className="prod-desp">
                A Resume that stands out! Make your own resume. It's free
              </p>
            </Link>
            <Link to="/Git" className="prod-action">
              <img className="product-logo" src={github} />
              <p className="prod-desp">
                Find Your Github friends and check out there repo!
              </p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Product;
