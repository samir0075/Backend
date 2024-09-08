const express = require("express");

const path = require('path')

const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('In the 3nd middleware!');

    //Sending the file content of shop.html (_dirname is the exact path of this file move to views which is sibling need to follow the path how we do)
    res.status(404).sendFile(path.join(__dirname, "../", 'views',
        'shop.html'));
});


module.exports = router;