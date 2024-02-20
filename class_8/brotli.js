var fs = require("fs");
var zlib = require("zlib");

var brotli = zlib.createBrotliDecompress();

var r = fs.createReadStream("class_8/btest.txt");
var w = fs.createWriteStream("class_8/btest.txt.gz");

r.pipe(brotli).pipe(w);
