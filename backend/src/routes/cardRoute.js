import { json, Router } from "express";
import { CardModel } from "../models/card.js";
const router = Router();
router.get("/", async (req, res) => {
  let { id } = req.query;
  console.log(`getting data of id=${id.id}`);
  //id = {id: "lol"}
  //id.id = "lol"
  const cardData = await CardModel.find({ id: id.id });
  res.send({
    cardData,
  });
});

router.post("/", async (req, res) => {
  console.log(req.body)
  res.send({message: "success"});
});

router.post("/image", async (req, res) => {
  console.log("here");
  res.send({
    status: "done",
  });
});
export default router;
