const Product = require("../models/product")
const path = require('path')

// routes - "/admin/get-add-product"

exports.getAddProduct = (req, res, next) => {
    console.log('In the 1st middleware!');

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    res.status(200).sendFile(path.join(__dirname, "../", "views", "add-product.html"))

}
// routes - "/admin/add-product"

exports.postAddProduct = (req, res, next) => {
    console.log(req.body)

    const product = new Product(req.body.product)

    product.save();  // It accessed save function which is created inside class Product in models
    // products.push({ title: req.body.product })
    const products = Product.fetchAll(); // To display the saved product from models
    res.status(200).json({ success: true, message: 'Product added successfully', products });
    // console.log(products)
    res.redirect('/');
}
// routes - "/"
exports.getProducts = (req, res, next) => {

    const products = Product.fetchAll(); // To display the saved product from models

    res.status(200).json({ success: true, message: 'Product Fetched successfully', products });

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    // res.status(200).sendFile(path.join(__dirname, "../", 'views',
    //     'shop.html'));

    // res.render('shop', {
    //     title: products,
    //     pageTitle: "SHOP",
    //     path: "/",
    //     hasProducts: products.lenght > 0

    // })
}