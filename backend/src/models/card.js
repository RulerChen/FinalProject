import mongoose from "mongoose";

const Schema = mongoose.Schema;
/******* User Schema *******/
const cardSchema = new Schema({
  id: { type: String, required: [true, "from is required."] },
  url: { type: String },
  text: { type: String },
  tag: { type: String },
  price: {type: Number, required: [true, "price is required."]},
  details : {type: String}
});
const CardModel = mongoose.model("Card", cardSchema);

export { CardModel };
