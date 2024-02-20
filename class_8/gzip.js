var zlib = require("zlib");
var fs = require("fs");
var gzip = zlib.createGzip();

var r = fs.createReadStream("class_8/gzip.txt");

var w = fs.createWriteStream("class_8/gzip.txt.gz");

r.pipe(gzip).pipe(w);
