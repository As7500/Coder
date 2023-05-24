const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostByID,
} = require("../controllers/post.controller");
const router = express.Router();

router.route("/").post(createPost).get(getAllPosts);

router.route("/:id").get(getPostByID);

module.exports = router;
