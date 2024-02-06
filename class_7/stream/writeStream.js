var fs = require("fs");
var data = "This is node js class";
var writer = fs.createWriteStream("./class_7/stream/test.txt");

writer.write(data, "utf-8");

writer.end();
writer.on("finish", () => {
  console.log("Write completed");
});

writer.on("error", (err) => {
  console.error(err);
});
