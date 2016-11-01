var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer();

var port = process.env.PORT || 8080;



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.post('/filesize', upload.single('file'), function(req, res) {
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
