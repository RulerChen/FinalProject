import express from "express";
import cors from "cors";
import db from "./db.js";
import dotenv from "dotenv-defaults";
import path from "path";
//graphql
import { createServer } from "http";
import { CardModel  } from "./models/card.js";
import * as fs from "fs";
import { createSchema, createYoga } from "graphql-yoga";
import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
const yoga = createYoga({
  schema: createSchema({
    typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
    resolvers: {
      Query,
      Mutation,
    },
  }),
  context: {
    CardModel,
  },
});
//http://finalproject-u4ak.onrender.com/
db.connect();
const server = createServer(yoga);
server.listen(5000, () => console.log(`listening on port http://localhost:${5000}/graphql!`));
//*下面沒動*

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") app.use(cors());

db.connect();

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
