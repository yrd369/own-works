import express from "express";
import router from "./routers/router.js";
const server = express();
const PORT = 3691;

server.use(router);
router.get("*", (req, res) => {
  return res.send("error 404 ");
});
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
