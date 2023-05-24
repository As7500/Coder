const express = require("express");

const passport = require("passport");

const router = express.Router();

const CLIENT_URL = "http://localhost:3000";

const schema = require("../services/prisma");

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {}),
  function (req, res) {
    // Successful authentication, redirect home
    res.redirect(`${CLIENT_URL}/home`);
  }
);

router.get("/currentuser", (req, res) => {
  console.log(req.user);
  if (!req.user) {
    return res.status(403).json({
      message: "not logged in",
    });
  } else {
    res.status(200).json({
      user: req.user,
    });
  }
});

router.get("/badge", async (req, res) => {
  if (!req.user) {
    return res.status(403).json({
      message: "not logged in",
    });
  } else {
    const answers = await schema.answer.count({
      where: {
        userId: req.user.id,
      },
    });

    return res.status(200).json({
      badges: answers,
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  return res.status(200).json({
    message: "Logged out successfully",
  });
});

module.exports = router;
