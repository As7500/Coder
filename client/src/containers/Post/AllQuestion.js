import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./AllQuestion.css";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useAuth } from "../../context/AuthContext";

function AllQuestion({
  id,
  title,
  body,
  username,
  updatedAt,
  userImg,
  tags,
  votes,
  likes,
}) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();

  let cardType = "";
  if (votes >= 10) {
    cardType = "popular-card";
  } else if (votes >= 5) {
    cardType = "trending-card";
  } else {
    cardType = "normal-card";
  }

  const handleLikeClick = async () => {
    if (!liked) {
      // setLikeCount(likeCount + 1);
      const newLikeCount = likeCount + 1;
      localStorage.setItem("likeCount", newLikeCount);
      setLikeCount(newLikeCount);
      setLiked(true);
      try {
        const response = await axios.post(`/likes/${id}`, {
          userId: user.id, // replace with actual user ID
        });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      // setLikeCount(likeCount - 1);
      const newLikeCount = likeCount - 1;
      localStorage.setItem("likeCount", newLikeCount);
      setLikeCount(newLikeCount);
      setLiked(false);
      try {
        const response = await axios.delete(`/likes/${id}`, {
          data: { userId: user.id }, // replace with actual user ID
        });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={`all-questions ${cardType}`}>
      <div className="all-questions-container">
        <div className="question-answer">
          <img
            className="user-imagee"
            src={userImg}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              opacity: "30",
            }}
          />
          <div className="user-info">
            <p className="user-name">{username}</p>
            <div className="author">
              <small>{updatedAt}</small>
            </div>
          </div>

          <Link to={`/question/${id}`}>{title}</Link>
          <div style={{ width: "90%" }}>
            <div>{body}</div>
          </div>
          <div style={{ display: "flex" }}>
            {tags.map((tag) => {
              return (
                <span key={Math.random()} className="question-tags">
                  {tag}
                </span>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <button className="like-button" onClick={handleLikeClick}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={liked ? " heart-icon-liked " : " heart-icon "}
                />
                {likeCount > 0 ? `${likeCount} Liked` : " Like "}
              </button>
            </div>
            <div>
              <Link to="../question" className="comment-link">
                {/* {Math.floor(Math.random() * 1)} */}
                Answers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestion;
