const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    fileName: {
        type : String
    },
   
    fileHash: {
        type : String
    }
},
{timestamps:true}
) 

module.exports = mongoose.model('ipfs', imageSchema)


