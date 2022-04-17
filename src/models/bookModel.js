const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    price: {
        indianPrice: String,
        europeanPrice: String
    },
    year: Number,
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



// String, Number
// Boolean, Object/json, array