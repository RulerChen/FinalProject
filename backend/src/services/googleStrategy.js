import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import { UserModel } from "../models/user.js";
import "dotenv-defaults/config.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:4000/user/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
    //   console.log(profile);
      await UserModel.findOne({ email: profile.emails[0].value }).then((foundUser) => {
        if (foundUser) {
          console.log("User already exist");
          done(null, foundUser);
        } else {
          new UserModel({
            username: profile.displayName,
            email: profile.emails[0].value,
            password: profile.emails[0].value,
            point: 100,
          })
            .save()
            .then((newUser) => {
              console.log("New user created.");
              done(null, newUser);
            });
        }
      });
    }
  )
);
