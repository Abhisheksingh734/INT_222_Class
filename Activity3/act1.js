const fs = require("fs");
fs.open("Activity3/index.txt", "r", (err, fd) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.readFile(fd, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("reading file before append: " + data.toString());

    fs.close(fd, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      fs.appendFile("Activity3/index.txt", " appending file", (err) => {
        if (err) {
          console.error(err);
          return;
        }

        fs.readFile("Activity3/index.txt", (err, newData) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log("reading file after append: ", newData.toString());
        });
      });
    });
  });
});
