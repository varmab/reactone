const express = require('express');
const app=express();

var multer  = require('multer');
var fs = require('fs');

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (request, file, callback) {
        callback(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.post('/api/upload', upload.single('photo'), (req, res, next) => {
    const file = req.file
  
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
  
    res.send(file)
  
  })

  app.listen(5000,()=>{
      console.log("server is started")
  });