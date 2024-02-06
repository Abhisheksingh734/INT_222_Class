var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("Going to open an existing file");

fs.unlink("./class_7/input.txt", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("File is deleted");
});
