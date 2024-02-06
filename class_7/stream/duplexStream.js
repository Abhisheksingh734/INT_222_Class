var fs = require("fs");
var data = "This is node js class";
var writer = fs.createWriteStream("./class_7/stream/test2.txt");
var reader = fs.createReadStream("./class_7/stream/test2.txt");

writer.write(data, "utf-8");
writer.end();

writer.on("finish", () => {
  console.log("Write completed");
});

reader.setEncoding("utf-8");
var data = "";
reader.on("data", (chunk) => {
  data = chunk;
});

reader.on("end", () => {
  console.log(data);
});
