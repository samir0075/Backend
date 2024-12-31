const express = require("express");

const path = require('path')

const router = express.Router();

const adminData = require("./admin")


router.get('/', (req, res, next) => {

    console.log(adminData.products, "SHOP")

    const products = adminData?.products;

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    res.status(200).sendFile(path.join(__dirname, "../", 'views',
        'shop.html'));

    // res.render('shop', {
    //     title: products,
    //     pageTitle: "SHOP",
    //     path: "/",
    //     hasProducts: products.lenght > 0

    // })
});


module.exports = router;