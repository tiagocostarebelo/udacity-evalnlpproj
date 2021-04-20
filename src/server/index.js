projectData = {};
//Protecting API key
const dotenv = require('dotenv');
dotenv.config();

//Api Call
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;


//Dependencies and middleware
const path = require('path');
const mockAPIResponse = require('./mockAPI.js');
const http = require('http');
//const bodyParser = require('body-parser');
const cors = require('cors');
//Express
const express = require('express');
const { response } = require('express');
const app = express();
//As of Express version > 4.16
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Main Folder
app.use(express.static(path.join(__dirname, '../../dist')));


//Port
const port = process.env.PORT || 8001;
app.listen(port, function() {
    console.log(`server is running on port ${port}`)
});

console.log(__dirname);

//Routes
app.get('/', function (req, res) {
    console.log("Hello from server index")
    res.send("Hello from Server Index")
    // res.sendFile('dist/index.html', { root: __dirname })
})

//POST request
app.post('/test', function (req, res) {
    res.send(mockAPIResponse)
})








