const express = require('express');
const router = express.Router();
const middleware = require("../middlewares/middlewares")
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")


router.post("/createUser", middleware.mid1, userController.createUser)
router.post("/createOrder", middleware.mid1, orderController.createOrder)
router. post("/createProduct", productController.createProduct)


module.exports = router;