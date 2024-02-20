let buffer1 = new Buffer.from("tutorial points");
let buffer2 = buffer1.slice(0, -1);

console.log(buffer1.includes(buffer2));

console.log("buffer2 content: " + buffer2.toString());
