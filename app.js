const express = require("express"),
    app       = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("index")
});



app.listen(process.env.PORT || 8000, () => {
    console.log('app listening on port 8000!')
});