const fs = require('fs');
// file creation
fs.writeFileSync('student.txt', 'Log Created\n');
console.log("File created successfully!");
// Writing data and (overwrite previous data)
fs.writeFileSync('student.txt', 'Name: Avni\nStatus: Logged in\n');
console.log("Data written successfully!");
//append data
fs.appendFileSync('student.txt', 'Activity: Completed Practical\n');
console.log("Data appended successfully!");
// read data
const data = fs.readFileSync('student.txt', 'utf-8');
console.log("File Content:\n" + data);
//delete file
fs.unlinkSync('student.txt');
console.log("File deleted successfully!");