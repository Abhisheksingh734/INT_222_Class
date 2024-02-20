var buf = new Buffer.from("Simply learning ");
var json = buf.toJSON(buf);

console.log(json);
