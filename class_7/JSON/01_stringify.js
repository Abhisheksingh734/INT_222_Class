var fs = require("fs");

fs.readFile("./class_7/JSON/student.json", (err, data) => {
  if (err) {
    throw err;
  }

  let student = JSON.parse(data);

  //converting to string
  console.log(JSON.stringify(student, null, 10));
  console.log(JSON.stringify(student, ["age"], 10));

  console.log(student);
});
