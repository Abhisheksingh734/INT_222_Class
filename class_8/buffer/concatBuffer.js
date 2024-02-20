var buffer1 = new Buffer.from("tutorailsPoint");
var buffer2 = new Buffer.from("Simply Easy Learning");

var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("Buffer 3 content: " + buffer3.toString());
