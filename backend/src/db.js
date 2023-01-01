import mongoose from "mongoose";
import "dotenv-defaults/config.js";

export default {
  connect: () => {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("mongo db connection created"));
  },
};
