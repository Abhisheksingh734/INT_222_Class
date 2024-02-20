//array
// var buffer = new Buffer.alloc([10, 20, 30]);
// //string
// var buffer = new Buffer.alloc("Simply easy learning", "utf-8");

// buffer.write();

/**

string
offset
length
encoding

bur
 */

var buf = new Buffer.alloc(256);
len = buf.write("Simple learning");

console.log("Octests written :", len);

//reading data from buffer

console.log(buf.toString("utf-8", 0, len));
