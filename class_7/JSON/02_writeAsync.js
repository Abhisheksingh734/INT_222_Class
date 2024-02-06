var fs = require("fs");

let student = {
  name: "Maike",
  age: "23",
  department: "English",
  car: "honda",
};

let data = JSON.stringify(student, null, 2);

fs.writeFile("./class_7/JSON/student.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("Data written to file");
});
