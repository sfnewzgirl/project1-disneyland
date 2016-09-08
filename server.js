//REQUIRE MODULES
var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//REQUIRE DATABASE
var db = require('./models');

//ROUTES
//STATIC ROUTE
app.use(express.static('public'));

//HOMEPAGE ROUTE
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//LIST ALL PROTIPS
app.get('/api/protips', function (req, res) {
  db.ProTip.find(function (err, protips){
    if (err) {return console.log(err);}
    res.json(protips);
  });
});

//LIST ONE PROTIP
app.get('/api/protips/:id', function (req, res) {
  db.ProTip.findOne({_id: req.params.id}, function(err, data) {
    if (err) {return console.log(err);}
    res.json(data);
  });
});

//LIST ONE PROTIP score




//JSON ENDPOINTS
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    ParkProTipsEndpoints: true,
    message: "Welcome to Our Park Pro Tips API!",
    documentationUrl: "https://github.com/sfnewzgirl/project1-disneyland/blob/master/README.md",
    baseUrl: "https://parkprotips.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Homepage"},
      {method: "GET", path: "/api/protips", description: "lists all protips"},
      {method: "GET", path: "/api/protips/:id", description: "lists one protip"},
      {method: "GET", path: "/api/protips/:id/tipScore", description: "lists one protip score"},
      {method: "POST", path: "/api/protips", description: "adds one protip"},
      {method: "PUT/PATCH", path: "/api/protips/:id", description: "updates one protip"},
      {method: "DELETE", path: "api/protips/:id", description: "deletes one protips"}
    ]
  })
});

// LISTEN TO LOCALHOST
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
