import { CardModel } from "../models/card.js";

// find card in gmae
export async function findGameCard(req, res) {
  let { game } = req.query.game;
  console.log(game);
  console.log(`getting data of game = ${game}`);
  const cardData = await CardModel.find({ game });
  // console.log(cardData);
  res.send({
    cardData,
  });
}

// add card
export async function addGameCard(req, res) {
  console.log(req.body);
  const { data } = req.body;
  console.log(data);
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
}

// check upload image
export async function uploadImage(req, res) {
  // console.log("here");
  res.send({
    status: "done",
  });
}
