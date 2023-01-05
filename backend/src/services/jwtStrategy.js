import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { UserModel } from "../models/user.js";
import "dotenv-defaults/config.js";

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = process.env.PASSPORT_SECRET;
passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    await UserModel.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) return done(err, false);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  })
);
