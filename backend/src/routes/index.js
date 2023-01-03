import * as cardRoute from "./cardRoute.js";
import * as userRoute from "./userRoute.js";

import passport from "passport";
import passportFn from "../config/passport.js";
passportFn(passport);

function main(app) {
  app.get("/api/cards", cardRoute.findGameCard);
  app.post("/api/cards", cardRoute.addGameCard);
  app.post("/api/cards/image", cardRoute.uploadImage);

  app.post("/api/user/register", userRoute.register);
  app.post("/api/user/login", userRoute.login);
  app.put("/api/user/pay", userRoute.pay);

}

export default main;
