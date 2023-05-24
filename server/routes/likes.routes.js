const express = require("express");
const router = express.Router();
const likeController = require("../controllers/like.controller");

router.post("/:postId", likeController.likePost);
router.delete("/:postId", likeController.likePost);

module.exports = router;
