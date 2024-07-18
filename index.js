const express = require("express");
const multer = require("multer");

const server = express();
const PORT = 3030;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    },
  });
  
  const uploads = multer({ storage: storage });


server.post('/uploads', uploads.single("avatar"), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.status(200).send({"status code":"200","message":"file uploaded successfully"});
  });
    
server.listen(PORT,(req,res)=>{
    console.log(`port is listening ${PORT}`);
});