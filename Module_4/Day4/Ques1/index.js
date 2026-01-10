const express = require("express");
const fs = require("fs");
const os = require("os");
const dns = require("dns");
const app = express();
const PORT= 9000;
const {readFile} = require("./read.js");
app.get("/test",(req,res)=>{
 fs.writeFileSync("Data.txt","This is some sample data inside Data.txt.");
 res.send("This is some sample data inside Data.txt.");

})

app.get("/readfile",(req,res)=>{
    const content = readFile();
     if(content){
        return res.send(content);
     }
     else{
        return res.status(400).json({msg:"data not find"});
     }
})


app.get("/systemdetails", (req, res) => {
  res.send({
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",
    cpuModel: os.cpus()[0].model
  });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address) => {
    if (err) return res.send("Error");
   res.json({
      hostname: "masaischool.com",
      ipAddress: address
    });
  });
});


app.listen(PORT,()=>{
    console.log("Server Running SuccessFully")
})