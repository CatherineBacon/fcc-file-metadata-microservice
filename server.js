var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer();

var port = process.env.PORT || 8080;



app.get('/', function(req, res) {
    // static html page goes here
});



app.post('/filesize', function(req, res) {
    var name = req.file.originalname;
    var size = req.file.size;
    res.json(
        {
            'name': name,
            'size': size
        }
    );
});



var listener = app.listen(port);
