let buffer1 = new Buffer.from("ABC");
let buffer2 = new Buffer.alloc(3);
buffer1.copy(buffer2);

console.log(buffer2.equals(buffer1));
console.log("buffer2 content: " + buffer2.toString());
