import express from "express";
import userRouter from "./users.js";
const router = express.Router();
router.get("/", (req, res) => {
  return res.json({ message: "I am root page" });
});
router.post("/create", (req, res) => {
  const dataFromClient = req.body;
  const data = {
    name: "yogha raj",
    createAt: new Date(),
  };
  return res.json({ ...dataFromClient, createAt: Date.now() });
});
export default router;
