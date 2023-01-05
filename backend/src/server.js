import express from "express";
import passport from "passport";
import cors from "cors";
import path from "path";

import db from "./db.js";
import routes from "./routes/index.js";

import "./services/jwtStrategy.js";
import "./services/googleStrategy.js";
import "dotenv-defaults/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());


if (process.env.NODE_ENV !== "production") app.use(cors());

db.connect();
routes(app);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}!`));
