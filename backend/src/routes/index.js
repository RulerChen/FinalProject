import * as cardRoute from "./cardRoute.js";
import * as userRoute from "./userRoute.js";

import passport from "passport";

function main(app) {
  app.get("/api/cards", cardRoute.findGameCard);
  app.post("/api/cards/history", passport.authenticate("jwt", { session: false }), cardRoute.getHistory);
  app.post("/api/cards/add", passport.authenticate("jwt", { session: false }), cardRoute.addGameCard);
  app.post("/api/cards/image", cardRoute.uploadImage);

  app.post("/api/user/register", userRoute.register);
  app.post("/api/user/login", userRoute.login);
  app.put("/api/user/pay", passport.authenticate("jwt", { session: false }), userRoute.pay);

  app.get(
    "/api/user/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account",
    }),
    (req, res) => {
      res.set("Access-Control-Allow-Origin", "*");
    }
  );
  app.get(
    "/user/google/redirect",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3000",
      failureRedirect: "/",
      session: false,
    }),
    userRoute.googleRedirect
  );
}

export default main;
