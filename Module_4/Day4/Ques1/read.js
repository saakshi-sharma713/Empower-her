const fs = require("fs");

function readFile(){
  const content =  fs.readFileSync("Data.txt","utf-8");  
  return content;
}

module.exports ={readFile};