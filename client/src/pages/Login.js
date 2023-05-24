import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import community from "../assets/community.png";
import git from "../assets/git.svg";
import program from "../assets/program.png";
import "./login.css";

function Login() {
  const { user } = useAuth();

  const github = () => {
    window.open("http://localhost:8000/auth/github", "_self");
  };

  console.log(user, "this is cool");

  if (user) {
    return <Navigate to={"/home"} replace={true} />;
  }

  return (
    <tubro-frame className="login">
      <div className="login-head">
        <section className="form-section">
          <div className="inner">
            <a className="logo">
              <img src={community} />
            </a>
            <p className="tagline">Code Practice and mentorship for everyone</p>

            <div className="github-btn">
              <button onClick={github} className="btn-git" type="submit">
                <img className="c-login" src={git} />
                <p>Sign Up with GitHub</p>
              </button>
            </div>
          </div>
        </section>
        <section className="information-section">
          <div className="content">
            <img src={program} />
            <h2 className="content-h2">Coder Community</h2>
            <p className="content-p">
              Level up your programming skills by{" "}
              <strong>solving other problems </strong> with insighthful
              discussion with our dediated team of welcoming mentors
            </p>
            <p className="content-p">
              <strong>
                Coder Community helps you to boost your knowledge and helps to
                get your solution of your problem
              </strong>
            </p>
          </div>
        </section>
      </div>
    </tubro-frame>
  );
}

export default Login;
