const express = require("express"),
    app       = express();

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("index.html")
});

app.listen(process.env.PORT || 8000, () => {
    console.log('app listening on port 8000!')
});