import express from "express";
import { detailsRequest } from "../models/model.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ message: "I am root page" });
});

router.post("/create", async (req, res) => {
  const dataFromClient = { ...req.body, createAt: Date.now() };
  const sendData = await detailsRequest(dataFromClient);
  console.log("creation", sendData);
  
  return res.json(dataFromClient);
});
export default router;
