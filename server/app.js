const express = require("express");
require("./services/passport");
const authRouter = require("./routes/auth.routes");
const answerRouter = require("./routes/answer.routes");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

const postRouter = require("./routes/post.routes");
// const answerRouter = require("./routes/answer.routes"); // import answerRoutes
const likeRouter = require("./routes/likes.routes");
const notificationRouter = require("./routes/notification.routes");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/answers", answerRouter);
// app.use("/answers", answerRouter); // add answerRoutes as middleware
app.use("/notifications", notificationRouter);
app.use("/likes", likeRouter);

module.exports = app;
