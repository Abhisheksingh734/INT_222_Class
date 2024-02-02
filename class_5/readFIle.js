var fs = require("fs");

fs.readFile("index.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: ", data.toString());
});

console.log("Program ended");

//

// var dataSync = fs.readFileSync("index.js");

// console.log("Synchronous read: ", dataSync.toString());

// console.log("program ended");
