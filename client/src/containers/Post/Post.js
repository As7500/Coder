import React from "react";
import "./post.css";
import AllQuestion from "../Post/AllQuestion";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import userID from "../../context/AuthContext";
// import axios from "axios";
import axios from "../../utils/axios";
function Post({ questions }) {
  // const [questions, setQuestions] = useState([]);

  // console.log(questions);

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("/posts");
      return res.data;
    },
  });

  console.log(data?.data);

  const posts = data?.data;

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/New">
            <button>Ask Question</button>
          </Link>

          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div className="main-desc">
          <p
            style={{
              fontSize: "25px",
              marginLeft: "600px",
              marginTop: "25px",
              fontWeight: "700",
              color: "#130b43",
            }}
          >
            Questions
          </p>
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
      {posts?.map((post) => {
        return (
          <Link to={`/question/${post.id}`}>
            <AllQuestion
              key={post.id}
              id={post.id}
              title={post.title}
              // body={post.body}
              username={post.user.username}
              userImg={post?.user?.photoUrl}
              updatedAt={post.updatedAt}
              tags={post.tags}
              likes={post.likes.length}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Post;
