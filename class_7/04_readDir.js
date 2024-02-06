var fs = require("fs");

console.log("Going to read directory /tmp");

fs.readdir("D:/K22LL/class/INT222/tmp", function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => {
    console.log(file);
  });
});
