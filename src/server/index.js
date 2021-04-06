projectData = {};
//Protecting API key
const dotenv = require('dotenv');
dotenv.config();
//Api Call
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const myApi = {
    application_key: process.env.API_KEY
 };
 const json = '&of=json&txt=';
 const apiKey = {
    application_key: process.env.API_KEY
 };
const final = '&model=General&lang=en';

//Dependencies and middleware
const path = require('path');
const mockAPIResponse = require('./mockAPI.js');
const http = require('http');
//const bodyParser = require('body-parser');
const cors = require('cors');
//Express
const express = require('express');
const app = express();
//As of Express version > 4.16
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(bodyParser.json());
app.use(cors());

//Main Folder
app.use(express.static('dist'));
console.log(__dirname);

//Port
const port = process.env.PORT || 8081;
app.listen(port, function() {
    console.log(`server is running on port ${port}`)
});

//Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//POST request

