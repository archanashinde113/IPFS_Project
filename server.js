// const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config();

// const app = express();
// // // app.use(express.static(__dirname + '/public'));
// require("./routes/ipfs.route")(app);


//   mongoose.connect(process.env.mongoURI,()=> {
//       console.log('mongoose connected')

//   })
 

// app.listen(8080,( ) => {
//     console.log('server running at port 8080')
// });




const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config();

const app = express();
// var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})
// 

const x = require('./routes/ipfs.route.js')
app.use('/ipfs',ipfs);
// app.use(express.static(path.resolve(process.cwd(), 'public/index.html')))




    


  

  mongoose.connect(process.env.mongoURI,()=> {
      console.log('mongoose connected')
  })
 
 
app.listen(4000,( ) => {
    console.log('server running at port 5000')
});