const express = require('express')

const path = require('path')

const router = express.Router();

// const products = []; //To store the Entered Data by the user.

const productsController = require("../controllers/products")

// Middleware handle the req, res & next

// "/admin/get-add-product" =>GET

router.get('/get-add-product', productsController.getAddProduct);

//Instead of 'use',  we can strictly  check with  get , post , patch , update & put method , only triggers that middleware when it found the exact method

// "/admin/add-product" =>POST

router.post('/add-product', productsController.postAddProduct);


module.exports = router;

// exports.routes = router;
// exports.products = products;