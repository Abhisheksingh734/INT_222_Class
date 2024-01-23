var http = require("http");
var dt = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time is : " + dt.myDateTime());
    res.end("Hello world!");
    console.log("Server is running at PORT", 8000);
  })
  .listen(8000);
