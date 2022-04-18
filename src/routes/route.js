const express = require('express');
const router = express.Router();
// const bookModel= require("../models/bookModel.js")
const BatchController= require("../controllers/batchController")

router.post("/createBatch", BatchController.createBatch)

router.post("/createDeveloper", BatchController.createDeveloper)

router.get("/scholarsDev", BatchController.scholarsDev)

router.get("/developers", BatchController.developers)



// router.get("/bookList", BookController.bookList)

// router.post("/getBooksInYear", BookController.getBooksInYear)

// router.post("/getParticularBooks", BookController.getParticularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)

// router.get("/getBooksData", BookController.getBooksData)


module.exports = router;