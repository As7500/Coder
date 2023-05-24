import axios from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import community from "../assets/community.png";
import action from "../assets/action.png";
import "../components/Hero/hero.css";
import Navbar from "../components/Navbar/Navbar";
import Fluent from "../components/Fluent/Fluent";
import Product from "../components/Products/Product";

function Home() {
  const { user, setUser } = useAuth();

  if (!user) {
    return <Navigate to={"/login"} replace={true} />;
  }

  const handleLogout = async () => {
    await axios.get("/auth/logout");
    setUser(null);
  };

  return (
    <div>
      <Navbar />
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
            {/* <Link to="/roadmap" className="vision-button-1" href="">
              Explore RoadMap
            </Link> */}
            <Link to="/group" className="vision-button-2">
              Explore languages
            </Link>
          </div>
        </div>
        <div className="vision-img">
          <img className="vision-img-action" src={action} />
        </div>
      </div>
      <Product />
      <Fluent />
    </div>
  );
}

export default Home;
