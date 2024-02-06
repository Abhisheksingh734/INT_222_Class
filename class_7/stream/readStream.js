var fs = require("fs");

var reader = fs.createReadStream("./class_7/stream/test.txt");

reader.setEncoding("utf-8");

reader.on("data", function (chunk) {
  data = chunk;
});

reader.on("end", function () {
  console.log(data);
});

reader.on("error", (err) => {
  console.error(err);
});
