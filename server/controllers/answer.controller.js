const prisma = require("../services/prisma");

async function handleCreateAnswer(req, res) {
  console.log(req.body);
  const { body, userId, postId } = req.body;

  if (!body || !userId || !postId) return res.sendStatus(400);
  const answer = await prisma.answer.create({
    data: {
      body,
      userId: req.user.id,
      postId,
      updatedAt: new Date(),
    },
  });
  return res
    .status(201)
    .json({ message: "Answer submitted Successfully", data: answer });
}

async function handleUpdateAnswer(req, res) {
  const { body, userId, answerId } = req.body;
  if (!body) return res.sendStatus(400);
  const findAnswer = await prisma.answer.findUnique({ id: answerId });
  if (!findAnswer) return res.sendStatus(400);
  if (userId !== findAnswer.userId) return res.sendStatus(400);
  const updateAnswer = await prisma.answer.update({
    data: {
      body,
    },
    where: {
      id: answerId,
    },
  });
  return res
    .status(200)
    .json({ message: "Updated Answer Successfully", data: updateAnswer });
}

async function handleDeleteAnswer(req, res) {
  const { answerId, userId } = req.body;

  const findAnswer = await prisma.answer.findUnique({
    where: { id: answerId },
  });
  if (userId !== findAnswer.userId)
    return res.status(400).json({
      message: "You are not allowed to delete the message of other user",
    });

  const deleteAnswer = await prisma.answer.delete({
    where: { id: findAnswer.id },
  });

  return res
    .status(200)
    .json({ message: "Deleted Answer Successfully", deleteAnswer });
}

async function getAnswersByPost(req, res) {
  const { postId } = req.params;
  if (!postId) return res.status(200).json({ message: "Answers by Post" });
  const answers = await prisma.answer.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return res.status(200).json({ message: "Anwers by Post", answers });
}

module.exports = {
  getAnswersByPost,
  handleDeleteAnswer,
  handleUpdateAnswer,
  handleCreateAnswer,
};
