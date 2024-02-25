import express from "express";
import router from "./routers/router.js";
import "dotenv/config";
import mongoose from "mongoose";

const server = express();
const PORT = 3691;

server.use(express.json());
server.use(router);
router.get("*", (req, res) => {
  return res.send("error 404 ");
});
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
}else{
  console.log("ENV is not set");
}
