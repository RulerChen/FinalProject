import { Router } from "express";
import { CardModel } from "../models/card.js";
const router = Router();
router.get("/", async (req, res) => {
  let { game } = req.query.game;
  console.log(game)
  console.log(`getting data of game = ${game}`);
  const cardData = await CardModel.find({game});
  // console.log(cardData);
  res.send({
    cardData,
  });
});


router.post("/", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  console.log(data)
  const newCard = new CardModel(data);
  await newCard
    .save()
    .then(() => {
      res.send({ message: "success" });
    })
    .catch((e) => {
      console.log("error:" + e);
    });
  // res.send({message: "success"});
});

router.post("/image", async (req, res) => {
  // console.log("here");
  res.send({
    status: "done",
  });
});
export default router;
