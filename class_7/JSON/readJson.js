var fs = require("fs");

fs.readFile("./class_7/JSON/student.json", (err, data) => {
  if (err) {
    console.error(err);
  }
  let student = JSON.parse(data);
  console.log(student);
});
