var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/resume.html'));
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});