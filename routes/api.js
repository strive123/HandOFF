/**
 * Created by Admin on 3/16/2017.
 */
var express = require('express');
var router   = express.Router();
const qs    = require('querystring');
var request = require('request');


router.get('/getphonenumber', function (req, res) {
    res.render('getphonenumber', {user:req.user});
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