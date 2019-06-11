const express        = require("express"),
      bodyParser     = require('body-parser'),
      cors           = require('cors'),
      app            = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const projects = require('./routes/projects-api.js');
app.use('/api/projects', projects);

// My projects
const myProjects = require("./myProjects.json");
app.set("view engine", "ejs")

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("index", {projects: myProjects});
});

app.get("/api/projects", function(req, res){
    res.send(myProjects);
});


app.listen(process.env.PORT || 8000, () => {
    console.log('app listening on port 8000!')
});