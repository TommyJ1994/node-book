var fs = require('fs'); // file system module
var path = require('path'); // file path

// Creates corn.txt
fs.writeFileSync("corn.txt", "Corn is good, corn is life");

// Reads corn.txt
console.log(fs.readFileSync("corn.txt").toString());

var websiteHome = "Desktop/Tom//jackman/index.html";
var websiteAbout = "Desktop/Tom//jackman/about.html";

console.log(path.normalize(websiteHome)); // fixes double // in path
console.log(path.dirname(websiteAbout)); // Gets the directory name
console.log(path.basename(websiteAbout)); // Gets the base/file name
console.log(path.extname(websiteAbout)); // Gets the file extension

/* Output
Desktop/Tom/jackman/index.html
Desktop/Tom//jackman
about.html
.html
*/
