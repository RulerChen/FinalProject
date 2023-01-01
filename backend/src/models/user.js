import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({});
const UserModel = mongoose.model("User", userSchema);

export { UserModel };
