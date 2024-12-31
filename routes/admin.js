const express = require('express')

const path = require('path')

const router = express.Router();

const products = []; //To store the Entered Data by the user.

// Middleware handle the req, res & next

// "/admin/add-product" =>GET
router.get('/add-product', (req, res, next) => {
    console.log('In the 1st middleware!');

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))

});

//Instead of 'use',  we can strictly  check with  get , post , patch , update & put method , only triggers that middleware when it found the exact method

// "/admin/add-product" =>POST

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({ title: req.body.product })
    // res.json({ success: true, message: 'Product added successfully', products }); // send back the response
    res.redirect('/');
});


// module.exports = router;

exports.routes = router;
exports.products = products;