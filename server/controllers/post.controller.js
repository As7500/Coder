const prisma = require("../services/prisma");
const createPost = async function (req, res, next) {
  const { title, body, tags } = req.body;

  console.log({ title, body, tags });

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        body,
        tags,
        userId: req.user.id,
        updatedAt: new Date(),
      },
    });
    await prisma.notification.create({
      data: {
        message: "someone just created the post",
        broadcast: true,
        userId: req.user.id,
      },
    });
    res.status(201).json({
      data: newPost,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err.message,
    });
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        likes: true,
      },
    });
    res.status(201).json({
      data: posts,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getPostByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("from params", req.params);
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({
      data: post,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostByID,
};
