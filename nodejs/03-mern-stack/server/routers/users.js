import express from "express";
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  const users = ["yogha", "shajid", "akalya", "abirami"];
  return res.json({ peoples: users });
});
export default userRouter;
