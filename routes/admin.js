const express = require('express')

const path = require('path')

const router = express.Router();

// Middleware handle the req, res & next

// "/admin/add-product" =>GET
router.get('/add-product', (req, res, next) => {
    console.log('In the 1st middleware!');

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))

});

//Instead of 'use',  we can strictly  check with  get , post , patch , update & put method , only triggers that middleware when it found the exact method

// "/admin/add-product" =>POST

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;