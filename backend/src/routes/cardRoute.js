import { CardModel } from "../models/card.js";

// find card in game
export async function findGameCard(req, res) {
  let { game } = req.query.game;
  console.log(`getting data of game = ${game}`);
  const cardData = await CardModel.find({ game });
  res.send({ cardData });
}

// add card
export async function addGameCard(req, res) {
  // console.log(req.body);
  const newCard = new CardModel(req.body);
  await newCard
    .save()
    .then(() => {
      res.send({ message: "add success" });
    })
    .catch((e) => {
      console.log("error:" + e);
    });
}

export async function getHistory(req, res) {
  const buy = await CardModel.find({ buyer: req.body.account });
  const sell = await CardModel.find({ account: req.body.account });
  res.send({ buy, sell });
}

// check upload image
export async function uploadImage(req, res) {
  // console.log("here");
  res.send({
    status: "done",
  });
}
