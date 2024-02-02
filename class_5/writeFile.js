var fs = require("fs");

console.log("Going to write in existing file");

fs.writeFile("index.txt", "Simply Easy Learing", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written succesfully");
  console.log("Let's read newly written dta");

  fs.readFile("index.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }

    console.log("Asynchronous read: ", data.toString());
  });
});
