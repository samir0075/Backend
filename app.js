//Importing express function (Middleware for handling req and res)
const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")

const app = express();

//importing the files from their places 

const adminRoutes = require("./routes/admin")

const shopRoutes = require("./routes/shop")

//this bodyParser uses to get the data from the form 

app.use(bodyParser.urlencoded({ extended: "false" }))

//Imported css file can be add js file also. Directly reaches to public file.

app.use(express.static(path.join(__dirname, 'public')))

//Added default "/admin" url before all adminRoutes url's

app.use("/admin", adminRoutes);

app.use(shopRoutes);

//Added 404 error 

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "error.html"))
})

//Server running on port 3000

app.listen(3000); 