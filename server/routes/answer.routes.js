const express = require("express");
const {
  getAnswersByPost,
  handleDeleteAnswer,
  handleUpdateAnswer,
  handleCreateAnswer,
} = require("../controllers/answer.controller");
const answerRouter = express.Router();

answerRouter.get("/:postId", getAnswersByPost);
answerRouter.delete("/:userId/:answerId/delete-answer", handleDeleteAnswer);
answerRouter.patch("/:postId/posts", handleUpdateAnswer);
answerRouter.post("/posts/create-answer", handleCreateAnswer);

module.exports = answerRouter;
