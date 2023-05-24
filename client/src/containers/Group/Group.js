import React from "react";
import "./group.css";
import d from "../../assets/d.svg";
import delphi from "../../assets/delphi.svg";
import jq from "../../assets/jq.svg";
import lua from "../../assets/lua.svg";
import php from "../../assets/php.svg";
import python from "../../assets/python.svg";
import ruby from "../../assets/ruby.svg";
import typescript from "../../assets/typescript.svg";
import exers from "../../assets/exers.svg";
import dart from "../../assets/dart.svg";
import go from "../../assets/go.svg";
import c from "../../assets/c.svg";
import kotlin from "../../assets/kotlin.svg";
import csharp from "../../assets/csharp.svg";
import cpp from "../../assets/cpp.svg";
import javascript from "../../assets/javascript.svg";
import java from "../../assets/java.svg";
import swift from "../../assets/swift.svg";
import { Link } from "react-router-dom";

function Group() {
  return (
    <div>
      <header className="tracks-header">
        <div className="containers">
          <div className="track-icons">
            <img className="c-icon" src={d} />
            <img className="c-icon" src={delphi} />
            <img className="c-icon" src={jq} />
            <img className="c-icon" src={lua} />
            <img className="c-icon" src={php} />
            <img className="c-icon" src={python} />
            <img className="c-icon" src={ruby} />
            <img className="c-icon" src={typescript} />
          </div>
          <h1 className="group-h1">Learn From anywhere get help from here</h1>
          <p className="group-p">
            You might be learning from any place, company or resource, we are
            here to help you. Post any of your doubt and there are other fellow
            coders along with our team to solve your doubts.
          </p>
        </div>
      </header>
      <div className="c-tracks-list">
        {/* <section className="c-search-bar">
          <div className="containers-2">
            <input
              className="search"
              type="text"
              placeholder="Search Community"
            />
            <div className="state">
              <p className="state-p">Showing all 67 Community</p>
            </div>
          </div>
        </section> */}
        <section className="containers-3">
          <div className="c-result-zone">
            <div className="tracks">
              <div className="unjoined-tracks">
                <Link to="/descp" className="tracks-a">
                  <img className="c-icons" src={java} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={java} />
                      <h3 className="title-name">Java</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/javascript" className="tracks-a">
                  <img className="c-icons" src={javascript} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={javascript} />
                      <h3 className="title-name">Javascript</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Declarative</li>
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/python" className="tracks-a">
                  <img className="c-icons" src={python} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={python} />
                      <h3 className="title-name">Python</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                      <li className="tags-li">Functional</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/cplus" className="tracks-a">
                  <img className="c-icons" src={cpp} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={cpp} />
                      <h3 className="title-name">C++</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Object-oriented</li>
                      <li className="tags-li">Static</li>
                      <li className="tags-li">Strong</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/csharp" className="tracks-a">
                  <img className="c-icons" src={csharp} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={csharp} />
                      <h3 className="title-name">C#</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/kotlin" className="tracks-a">
                  <img className="c-icons" src={kotlin} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={kotlin} />
                      <h3 className="title-name">kotlin</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                      <li className="tags-li">Functional</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/c" className="tracks-a">
                  <img className="c-icons" src={c} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={c} />
                      <h3 className="title-name">C</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Compiled</li>
                      <li className="tags-li">procedural</li>
                      <li className="tags-li">Static</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/go" className="tracks-a">
                  <img className="c-icons" src={go} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={go} />
                      <h3 className="title-name">Go</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">procedural</li>
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Static</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/dart" className="tracks-a">
                  <img className="c-icons" src={dart} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={dart} />
                      <h3 className="title-name">Dart</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Declarative</li>
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/typescript" className="tracks-a">
                  <img className="c-icons" src={typescript} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={typescript} />
                      <h3 className="title-name">Typescript</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Declarative</li>
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/php" className="tracks-a">
                  <img className="c-icons" src={php} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={php} />
                      <h3 className="title-name">PHP</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                      <li className="tags-li">procedural</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/d" className="tracks-a">
                  <img className="c-icons" src={d} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={d} />
                      <h3 className="title-name">D</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                      <li className="tags-li">Object-oriented</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/swift" className="tracks-a">
                  <img className="c-icons" src={swift} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={swift} />
                      <h3 className="title-name">Swift</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Declarative</li>
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Imperative</li>
                    </ul>
                  </div>
                </Link>
                <Link to="/ruby" className="tracks-a">
                  <img className="c-icons" src={ruby} />
                  <div className="info">
                    <div className="heading">
                      <img className="c-iconss" src={ruby} />
                      <h3 className="title-name">Ruby</h3>
                      <div className="items-center"></div>
                    </div>
                    <ul className="counts">
                      <li className="counts-li">
                        <img className="e-icons" src={exers} />
                        Questions
                      </li>
                    </ul>
                    <ul className="tags">
                      <li className="tags-li">Functional</li>
                      <li className="tags-li">Object-oriented</li>
                      <li className="tags-li">Linux</li>
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Group;
