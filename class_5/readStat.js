var fs = require("fs");

fs.stat("index.txt", function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got the file indo succesfully");

  //check file type
  console.log("isFile?: ", stats.isFile());
  console.log("isDirectory?", stats.isDirectory());
});
