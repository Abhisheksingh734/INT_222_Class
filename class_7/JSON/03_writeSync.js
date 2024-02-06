var fs = require("fs");

let student = {
  name: "Maike",
  age: "23",
  department: "English",
  car: "honda",
};

let data = JSON.stringify(student, null, 10);

fs.writeFileSync("./class_7/JSON/student-2.json", data);
