const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const developersSchema = new mongoose.Schema( {
    name : String,
    gender : {
        type : String,
        enum : ["male", "female", "other"]
    },
    percentage : Number,
    batch : {
        type : ObjectId,
        ref : "batch"
    }
}, { timestamps: true });

module.exports = mongoose.model('developer', developersSchema) 



// String, Number
// Boolean, Object/json, array