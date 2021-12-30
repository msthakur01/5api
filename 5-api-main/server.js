var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/routes.js')(app);

// Create a Server
app.listen(8081, function () {

  console.log("App listening at 8081")

})