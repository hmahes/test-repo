var fs = require('fs');

//Read the file which is without changes
var rawdata = fs.readFileSync('oldJSON.json');
var oldData = JSON.parse(rawdata);
console.log(oldData);

//Change the name
oldData.name = 'Wipro Ltd';

//Read the file which is without changes
var newrawdata = JSON.stringify(oldData, null, 2);
fs.writeFileSync('newJSON.json', newrawdata);
console.log("\r\nSuccessfully written our updated json to file\r\n");
console.log(newrawdata); 