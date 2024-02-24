import express from "express";
import router from "./routers/router.js";
import mongoose from "mongoose";
import "dotenv/config";
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
// mongoose.connect(process);
