import { CardModel } from "../models/card.js";

// find card in gmae
export async function findGameCard(req, res) {
  let { id } = req.query;
  console.log(`getting data of id=${id.id}`);
  const cardData = await CardModel.find({ id: id.id });
  res.send({
    cardData,
  });
}

// add card
export async function addGameCard(req, res) {
  console.log(req.body);
  res.send({ message: "success" });
}

// check upload image
export async function uploadImage(req, res) {
  console.log("here");
  res.send({
    status: "done",
  });
}
