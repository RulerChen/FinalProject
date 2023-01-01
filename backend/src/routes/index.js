import * as cardRoute from "./cardRoute.js";
import * as userRoute from "./userRoute.js";

function main(app) {
  app.get("/api/cards", cardRoute.findGameCard);
  app.post("/api/cards", cardRoute.addGameCard);
  app.post("/api/cards/image", cardRoute.uploadImage);
}

export default main;
