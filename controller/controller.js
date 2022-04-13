const express = require('express')
const path = require('path')
// var multer  = require('multer')
var ipfsAPI = require('ipfs-api')
// var upload = multer({ dest: '.uploads/' })
const fs =require('fs');
const imageModel = require('../model/ipfs.model')

var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

const app = express();
app.use(express.static(path.resolve(process.cwd(), 'public/index.html')))

module.exports = {
    data : function (req, res, next) {
        res.sendFile(path.resolve(process.cwd(), 'public/index.html'))
       

    },
    upload: ('/uploadFile',function (req, res, next) {
      
        const fileName = req.body.fileName;
        console.log(req.file);
        var data = new Buffer(fs.readFileSync(req.file.path));
        // var data = new Buffer(fs.readFileSync('./abc.svg.png'));
        ipfs.add(data, function (err,file){
            if(err){
                console.log(err);
            }
            console.log(file,path);
            image = new imageModel({
                fileHash: file[0].hash,
                fileName
              });
    
              image.save();
           res.send(file[0].hash);
           
        })
    

    }),

    download: function(req,res){
        console.log(req.params.ID);
        res.redirect('https://ipfs.io/ipfs/'+req.params.ID);
    }
}