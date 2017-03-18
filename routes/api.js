/**
 * Created by Admin on 3/16/2017.
 */
var express = require('express');
var router   = express.Router();
const qs    = require('querystring');
var request = require('request');



router.get('/facebook/callback', function (req,res) {
    console.log("ok");
    console.log("________________");
    request('https://graph.facebook.com/v2.8/oauth/access_token?'+
        'client_id=1228873080533218'+
        '&redirect_uri=https://obscure-lowlands-40418.herokuapp.com/api/facebook/callback'+
        '&client_secret=594d36c47a61140738c0b39212be34b0' +
        '&code='+req.query.code, function(err, res, body){
        console.log(body);
    });

})

router.get('/getphonenumber', function (req, res) {
    if (typeof req.user !== "undefined") {
        if (typeof req.user.facebook !== "undefined"){
            res.render('getphonenumber');}
    } else {
        request('https://www.facebook.com/v2.8/dialog/oauth?' +
            'client_id=1228873080533218' +
            '&redirect_uri=https://obscure-lowlands-40418.herokuapp.com/api/facebook/callback'+
            '&scope=public_profile',  function (err, res, body) {
                if (err) {
                    console.log("fuck", err)
                }

                console.log("vo toi day");
                console.log(res.header);
            }
        );
    }
})

router.post('/getphonenumber', function (req, res) {
    var obj = qs.parse(req.body.link)
    console.log(obj);
    var arr = Object.keys(obj).map(function(k) { return obj[k] });
    console.log(arr[0]);
    if (isNaN(arr[0])||arr[0]==='') {
        res.render('getphonenumber', {message: "Can't find your post ID"})
    } else {
        request("ds", function(err, res, body){
            if (err) {
                console.log("can't request to facebook api");
                console.log(err);
            } else {
                if (res.statusCode == 200) {
                    var parsedData = JSON.parse(body);
                    console.log(parsedData);
                } else {
                    console.log('link resquest wrong');
                }
            }
        });

    }

})

module.exports = router;