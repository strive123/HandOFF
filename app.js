/**
 * Created by Nguyen Dang An on 3/4/2017.
 */
var express = require('express');
var app = express();
var getParameter = require('./function/getParameter');
var bodyParser = require('body-parser');
var google = require('./js/ggscript');
var cmtArray = [];
app.use(express.static('js'));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.redirect('index.html');

})

// facebook and google sheet
app.get('/fbags', function (req, res) {
    var postId = getParameter("fbid",req.body.link);
    res.render("getLink",{postId:postId});

})

app.get("/callback", function(req,res){
    var code = req.query.code;
    console.log("vo call back google");
    console.log(req);
    google.getNewToken(code,function(auth) {
        google.spreadsheet(auth, cmtArray, function (url) {
            //console.log(url);
            res.redirect(url);
        })
    });
})
// facebook cmt post
app.post('/fcp', function (req, res) {
    console.log('vo fcp');
    var cmt = req.body.data;
    var len = cmt.length;
    var i=0;
    cmtArray = [];
    for (; i<len;i++){
        cmtArray.push([cmt[i].message]);
    }
    console.log(cmt);
    google.run();
})
//process.env.PORT,process.env.IP
app.listen(process.env.PORT,process.env.IP, function () {
    console.log("OK!!");
})