const express = require('express')
const path = require('path')
var multer  = require('multer')
var ipfsAPI = require('ipfs-api')
//var upload = multer({ dest: '.uploads/' })
const fs =require('fs');
const imageModel = require('../model/ipfs.model')

var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

const app = express();
app.use(express.static(path.resolve(process.cwd(), 'public/index.html')))

module.exports = {
    data : function (req, res, next) {
        res.sendFile(path.resolve(process.cwd(), 'public/index.html'))


    },
    upload: function (req, res, next) {
        var data = new Buffer(fs.readFileSync('./abc.svg.png'));
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
    

    },

    download: function(req,res){
        console.log(req.params.ID);
        res.redirect('https://ipfs.io/ipfs/'+req.params.ID);
    }
}