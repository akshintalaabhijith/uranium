const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;