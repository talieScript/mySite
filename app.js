const express        = require("express"),
      bodyParser     = require('body-parser'),
      cors           = require('cors'),
      app            = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// projects ajax routes
const projects = require('./routes/projects-api.js');
app.use('/api/projects', projects);

// constact form post route 
const contact = require('./routes/contact.js');
app.use('/', contact);

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.render("index.html");
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(process.env.PORT || 8000, () => {
    console.log('app listening on port 8000!')
});

