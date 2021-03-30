//Express
const express = require('express');
const app = express;
//BodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyparser.json());
//Cors
const cors = require('cors');
app.use(cors());
//Main Folder
app.use(express.static('dist'));

//Server
const port = 8080;
const server = app.listen(port, listening);
function listening() {
    console.log(`server is running on port ${port}`);
}

//Get Request to the homepage
app.get('/', function (req, res) {
    res.send("Hello World");
});

//Post Request to the Homepage
app.post('/', function() {
    req.send();
});