var fs = require("fs");

console.log("GOing to create directory");

fs.mkdir("D:/K22LL/class/INT222/tmp/test", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully");
});
