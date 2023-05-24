import React, { useEffect, useState } from "react";
import "./question.css";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "../../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";

function Question({ username, updatedAt, userImg, votes, body }) {
  const [answerBody, setAnswerBody] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  console.log("from all question", id);

  const { data, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await axios.get(`/posts/${id}`);
      return res.data;
    },
  });

  const post = data?.data;

  const { data: answerData, isLoading: isAnswerLoading } = useQuery({
    queryKey: ["answer", id],
    queryFn: async () => {
      const res = await axios.get(`/answers/${id}`);
      return res.data;
    },
  });

  const answers = answerData?.answers;
  console.log("Log from post🔥", answerData?.answers);

  let cardType = "";
  if (votes >= 10) {
    cardType = "popular-card";
  } else if (votes >= 5) {
    cardType = "trending-card";
  } else {
    cardType = "normal-card";
  }

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };
  const createAnserMutation = useMutation({
    mutationFn: async (answerBody) => {
      await axios.post("http://localhost:8000/answers//posts/create-answer", {
        userId: user.id,
        postId: id,
        body: answerBody,
      });
    },
  });
  const handlePostAnswer = async (answerBody) => {
    createAnserMutation.mutate(answerBody);
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="question-answer">
              <p>{post?.body}</p>
              <div className="author">
                <small>asked "Timestamp"</small>
                <div className="auth-details">
                  <p>{username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: "500",
            marginLeft: "280px",
            color: "#130b43",
          }}
        >
          Answers
        </p>
        {answers?.map((ans) => {
          return (
            <div className="all-answers">
              <div className="all-answer-container">
                <div className="question-answer">
                  <p
                    style={{
                      marginLeft: "10px",
                      marginTop: "15px",
                      fontSize: "20px",
                    }}
                  >
                    {ans.body}
                  </p>

                  <div>
                    <button className="like-button-answer" onClick={handleLike}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={
                          liked ? " heart-icon-liked " : " heart-icon "
                        }
                      />
                      {likeCount > 0 ? `${likeCount} Liked` : " Like "}
                    </button>
                  </div>

                  <div className="author">
                    <img
                      className="answer-image"
                      src={ans.user.photoUrl}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50px",
                        opacity: "30",
                      }}
                    />
                    <p>{ans.user.username}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
          value={answerBody}
          onChange={setAnswerBody}
        />
      </div>
      <button
        className="anwer-comment"
        style={{
          marginTop: "50px",
          maxWidth: "fit-content",
        }}
        onClick={() => handlePostAnswer(answerBody)}
      >
        Answer
      </button>
    </div>
  );
}

export default Question;
