const passport = require("passport");
const GithubStrategy = require("passport-github2");
const prisma = require("../services/prisma");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  prisma.user
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },

    async function (access, _, profile, done) {
      const existingUser = await prisma.user.findFirst({
        where: { githubId: profile.id },
      });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await prisma.user.create({
          data: {
            githubId: profile.id,
            username: profile.username,
            photoUrl: profile._json?.avatar_url,
            updatedAt: new Date(),
          },
        });
        done(null, user);
      }
    }
  )
);
