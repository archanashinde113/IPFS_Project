const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    // fileName: {
    //     type : String
    // },
    // url: {
    //     type : String
    // },
    fileHash: {
        type : String
    }
}) 

module.exports = mongoose.model('ipfs', imageSchema)


