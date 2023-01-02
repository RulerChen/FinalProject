import mongoose from "mongoose";

const Schema = mongoose.Schema;
/******* User Schema *******/
const cardSchema = new Schema({
  game: { type: String, required: [true, "game is required."] }, //ex:lol
  category: { type: String, required: [true, "category is required."] }, //ex:帳號
  price: { type: Number, required: [true, "price is required."] }, //商品定價
  url: { type: String }, //圖片
  title: { type: String, required: [true, "title is required."] }, //商品內容
  intro: { type: String, required: [true, "intro is required."] }, //簡介
  detail: { type: String, required: [true, "detail is required."] }, //詳細說明
  stock: { type: Number, required: [true, "price is required."] }, //庫存
  username: { type: String, required: [true, "username is required."] }, //賣家username
  account: { type: String, required: [true, "account is required."] }, //賣家gmail
  goodAccount: { type: String, required: [true, "goodAccount is required."] }, //商品帳號
  goodPassport: { type: String, required: [true, "goodPassport is required."] }, //商品密碼
  point : { type: Number} //點數卡點數數量
});
const CardModel = mongoose.model("Card", cardSchema);

export { CardModel };
