import passportJwt from "passport-jwt";
import { UserModel } from "../models/user.js";
import "dotenv-defaults/config.js";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

export default function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = process.env.PASSPORT_SECRET;
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      UserModel.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) return done(err, false);
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
}
