import express from "express";
import userRouter from "./users.js";
const router = express.Router();
router.get("/", (req, res) => {
  return res.json({ message: "I am root page" });
});
router.get("/home", (req, res) => {
  return res.json({ message: "vanakam" });
});

router.get("/home/:id", (req, res) => {
  return res.json({ message: req.params.id });
});
router.use("/users", userRouter);
export default router;
