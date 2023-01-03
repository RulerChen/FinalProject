import { UserModel } from "../models/user.js";
import jwt from "jsonwebtoken";
import { registerValidation, loginValidation } from "../validation.js";
import "dotenv-defaults/config.js";

export async function register(req, res) {
  console.log("Register");
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await UserModel.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email has already been registered.");

  const newUser = new UserModel({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    point: 100,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({
      msg: "success",
      savedObject: savedUser,
    });
  } catch (err) {
    res.status(400).send("User not saved.");
  }
}

export async function login(req, res) {
  console.log("LogIn");
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  UserModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) res.status(400).send(err);
    if (!user) {
      res.status(401).send("User not found.");
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) return res.status(400).send(err);
        if (isMatch) {
          const tokenObject = { _id: user._id, email: user.email };
          const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
          res.send({ success: true, token: "JWT " + token, user });
        } else {
          res.status(401).send("Wrong password.");
        }
      });
    }
  });
}
