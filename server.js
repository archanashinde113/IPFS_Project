
const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config();

const app = express();


const ipfs = require('./routes/ipfs.route.js')
app.use('/ipfs',ipfs);


  mongoose.connect(process.env.mongoURI,()=> {
      console.log('mongoose connected')
  })
 
 
app.listen(5000,( ) => {
    console.log('server running at port 5000')
});



