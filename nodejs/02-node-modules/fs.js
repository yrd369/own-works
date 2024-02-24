const fs = require("fs");
fs.mkdir("./data", () => {});
const fsSytem = async () => {
  try {
    fs.writeFile("./data/interns.txt", "hello there", () => {
      console.log("file created");
    });
    const rs = fs.createReadStream("./data/interns.txt", "utf-8", () => {
      console.log("file created in read format");
    });
    const ws = fs.createWriteStream("./data/newinterns.txt", "utf-8", () => {
      console.log("file created in read format");
    });
    rs.pipe(ws);
  } catch (err) {
    console.log(err);
  }
};
fsSytem();
