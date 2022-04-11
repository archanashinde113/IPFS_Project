const express = require('express')
const mongoose = require('mongoose')
var multer  = require('multer')
var ipfsAPI = require('ipfs-api')
var upload = multer({ dest: 'uploads/' })
const fs =require('fs');
const dotenv = require('dotenv')
dotenv.config();


const imageModel = require('./model/ipfs.model.js')

const app = express();
var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})


app.get('/', function (req, res) {

    res.sendFile(__dirname+'/public/index.html');
})

app.post('/uploadFile', upload.single('fileupload'), function (req, res, next) {
   
    console.log(req.file);
    var data = new Buffer(fs.readFileSync(req.file.path));
    ipfs.add(data, function (err,file){
        if(err){
            console.log(err);
        }
        console.log(file);
        image = new imageModel({
            fileHash: file[0].hash
          });

          image.save();
       res.send(file[0].hash);
    })

  })

  app.get('/download/:ID',function(req,res){
      console.log(req.params.ID);
      res.redirect('https://ipfs.io/ipfs/'+req.params.ID);
  })

  mongoose.connect(process.env.mongoURI,()=> {
      console.log('mongoose connected')
  })
 
 
app.listen(5000,( ) => {
    console.log('server running at port 5000')
});