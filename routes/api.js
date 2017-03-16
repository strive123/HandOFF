/**
 * Created by Admin on 3/16/2017.
 */
var express = require('express');
var router   = express.Router();
const qs    = require('querystring');


router.get('/getphonenumber', function (req, res) {
    res.render('getphonenumber');
})

router.post('/getphonenumber', function (req, res) {
    console.log(req.body.link);
    console.log("________________");
    console.log(qs.parse(req.body.link));
})

module.exports = router;