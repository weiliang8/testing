const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "Tut02/files", "lorem.txt"),
  { encoding: "utf8" }
);

const ws = fs.createWriteStream(
  path.join(__dirname, "Tut02/files", "new-lorem.txt")
);

//rs.on("data", (dataChunk) => {
//  ws.write(dataChunk);
//});

//MORE EFFICIENCY WAY
rs.pipe(ws);
