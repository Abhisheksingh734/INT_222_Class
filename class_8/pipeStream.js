var fs = require("fs");

var reader = fs.createReadStream("class_8/test.txt");

var writer = fs.createWriteStream("class_8/test.txt");

writer.on("pipe", () => {
  console.log("Something is piping into the writer");
});

reader.pipe(writer);
