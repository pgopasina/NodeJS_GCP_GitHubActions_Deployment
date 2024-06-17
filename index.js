var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Prudhvi Gopasina" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World wellcome to GitHub actions" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "Great!, Its working!" }');
});

app.listen(port, () => {
    console.log('App is running successfully on port: ' + port);gdsjfvhgdsv
});

module.exports = app;
