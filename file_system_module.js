//examples to work with files in Node
const fs = require('fs');
//const files = fs.readdirSync('./');//return all the files and folders in the current folder
//console.log(files);
fs.readdir('./',function(err,files){
if(err) console.log('Error',err);
else console.log('Result',files)
});