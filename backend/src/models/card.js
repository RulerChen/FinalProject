import mongoose from "mongoose";

const Schema = mongoose.Schema;
const cardSchema = new Schema({
  game: { type: String, required: [true, "game is required."] },
  category: { type: String, required: [true, "category is required."] },
  price: { type: Number, required: [true, "price is required."] },
  url: { type: String},
  title: { type: String, required: [true, "title is required."] },
  intro: { type: String, required: [true, "intro is required."] },
  // details: { type: String },
});
const CardModel = mongoose.model("Card", cardSchema);

export { CardModel };
