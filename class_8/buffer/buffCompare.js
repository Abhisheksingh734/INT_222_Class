var buf1 = new Buffer.from("3");
var buf2 = new Buffer.from("1");

var res = buf1.compare(buf2);

if (res > 0) {
  console.log(buf1 + " comes after " + buf2);
} else if (res == 0) {
  console.log(buf1 + " is same as " + buf2);
} else {
  console.log(buf1 + " comes before " + buf2);
}
