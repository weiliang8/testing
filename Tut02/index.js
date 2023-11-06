const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // 1. READ ORIGINAL FILE AND STORE INTO DATA
    const data = await fsPromises.readFile(
      path.join(__dirname, "Tut02/files", "starter.txt"),
      "utf8"
    );

    console.log(data);

    // 2. DELETE ORIGINAL FILE
    await fsPromises.unlink(path.join(__dirname, "Tut02/files", "starter.txt"));

    // 3. WRITE DATA TO NEW FILE
    await fsPromises.writeFile(
      path.join(__dirname, "Tut02/files", "promiseWrite.txt"),
      data
    );

    // 4. UPDATE NEW FILE
    await fsPromises.appendFile(
      path.join(__dirname, "Tut02/files", "promiseWrite.txt"),
      "\n\nNice to meet you"
    );

    // 5. RENAME NEW FILE
    await fsPromises.rename(
      path.join(__dirname, "Tut02/files", "promiseWrite.txt"),
      path.join(__dirname, "Tut02/files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "Tut02/files", "promiseComplete.txt"),
      "utf8"
    );

    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// fs.writeFile(
//   path.join(__dirname, "Tut02/files", "reply.txt"),
//   "nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "Tut02/files", "test.txt"),
//   "testing...",
//   (err) => {
//     if (err) throw err;
//     console.log("Append complete");
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
