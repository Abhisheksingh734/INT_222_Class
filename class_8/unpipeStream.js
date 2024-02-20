var fs = require("fs");
var reader = fs.createReadStream("class_8/test.txt");

var writer = fs.createWriteStream("class_8/test.txt");

writer.on("pipe", () => {
  console.log("unpiping occurred");
});

reader.pipe(writer);
