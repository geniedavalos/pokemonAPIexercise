// //Imports
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public/dist/public"));

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})


// const app = require('./server/config/mongoose.js')
// app.listen(8000, () => console.log('listening on port 8000'));
// require('./server/config/routes.js')(app);