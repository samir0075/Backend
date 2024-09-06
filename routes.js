const requestHandler = (req, res) => {

    const url = req.url;

    if (url === "/hello") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<title>My First Page</title>")
        res.write("<body>Hi Samir</body>")
        res.write("</html>")
        //Ending the respose which we r sending
        res.end();
    }
}

module.exports = requestHandler;