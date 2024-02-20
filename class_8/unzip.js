var fs = require("fs");
var zlib = require("zlib");

var unzip = zlib.createUnzip();

var input = fs.createReadStream("class_8/gzip.txt.gz");

var output = fs.createWriteStream("class_8/gzip.txt");

input.pipe(unzip).pipe(output);
