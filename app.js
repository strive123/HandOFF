/**
 * Created by Nguyen Dang An on 3/4/2017.
 */
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index.html');
})
//process.env.PORT,process.env.IP
app.listen(process.env.PORT,process.env.IP, function () {
    console.log("OK!!");
})