const passport = require("passport");
const { Strategy } = require("passport-local");
const userController = require("../../controllers/user_controllers")


module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      usernameField: "userId",
      passwordField: "password"
    }, async (userId, password, done) => {
      try {
        const resp = await userController.authenticate({ userId });
        if (resp.password === password) {
          done(null, resp);
        }
        else {
          done(null, false);
        }

      }
      catch (err) {
        console.log(err);
      }

    }

  ));
}