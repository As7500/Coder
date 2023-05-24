import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vid.css";

const Video = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="video-container">
      <div className="background-vid" />
      <div className="overlay-vid" />
      <div className="content-vid">
        <h1 className="title-vid">Video Chat</h1>
        <form className="form-vid" onSubmit={handleSubmit}>
          <input
            className="input-vid"
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            placeholder="Enter Room Code"
          />
          <button className="btn-vid" type="submit">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Video;
