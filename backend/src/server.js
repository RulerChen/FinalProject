import express from "express";
import cors from "cors";
import db from "./db.js";
import path from "path";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

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
