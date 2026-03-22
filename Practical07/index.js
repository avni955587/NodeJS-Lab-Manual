const os = require('os');
const path = require('path');
const url = require ('url');

console.log("=========  OS MODULE   =========");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());

console.log("\n=========  PATH MODULE  =========");
const filePath = path.join('folder', 'student', 'data.txt');
console.log("Joined Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

console.log("\n=========  URL MODULE  =========");
const myUrl = new URL('https://example.com:8080/path/name?user=avni&age=20');
console.log("Full URL:", myUrl.href);
console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Query Params:", myUrl.searchParams.get('user'));