const prisma = require("../services/prisma");

const likePost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  const like = await prisma.like.findFirst({ where: { postId, userId } });

  if (like) {
    await prisma.like.delete({ where: { id: like.id } });
    return res.status(400).json({ msg: "already liked" });
  }

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const like = await prisma.like.create({
      data: {
        post: {
          connect: {
            id: post.id,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    res.status(201).json({ data: like });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { likePost };
