/**
 * Created by Admin on 3/16/2017.
 */
var express = require('express');
var router   = express.Router();
const qs    = require('querystring');
var request = require('request');

//
//
// router.get('/facebook/callback', function (req,res) {
//     request('https://graph.facebook.com/v2.8/oauth/access_token?'+
//         'client_id=1228873080533218'+
//         '&redirect_uri=http://localhost:3000/api/facebook/callback'+
//         '&client_secret=594d36c47a61140738c0b39212be34b0' +
//         '&code='+req.query.code, function(err, ress, body){
//         if (typeof req.user !== "undefined") {
//             var newUser            = new User();
//
//             // set all of the facebook information in our user model
//             newUser.facebook.id    = profile.id; // set the users facebook id
//             newUser.facebook.token = token; // we will save the token that facebook provides to the user
//             newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//             newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
//
//             // save our user to the database
//             newUser.save(function(err) {
//                 if (err)
//                     throw err;
//
//                 // if successful, return the new user
//                 return done(null, newUser);
//             });
//         }
//         console.log("__________________");
//         console.log(body);
//         console.log("__________________");
//     });
//
// })
router.get('/getphonenumber', function (req, res) {
    if (!req.isAuthenticated()) {
        res.redirect('/auth/facebook');
    } else {
    if (typeof req.user.facebook.token == 'undefined') {
        console.log('vo toi day roi');
        res.redirect('/auth/facebook/plus');
    } else {
    res.render('getphonenumber');}
}})

// router.get('/getphonenumber', function (req, res) {
//     var promise = new Promise(function(resolve, reject){
//         if (typeof req.user !== "undefined") {
//             if (typeof req.user.facebook !== "undefined") {
//                 request('https://graph.facebook.com/me?access_token=' + req.user.facebook.token,
//                     function (err, ress, body) {
//                         var parsedData = JSON.parse(body);
//                         console.log(parsedData);
//                         if (typeof parsedData.error == "undefined") {
//                             res.render('getphonenumber');
//                         } else {
//                             return resolve(true);
//                         }
//                     });
//             } else {
//                 return resolve(true); }
//         } else {
//             return resolve(true); }
//     });
//     promise.then(function (finished) {
//         if (finished){
//         res.redirect('https://www.facebook.com/v2.8/dialog/oauth?' +
//                 'client_id=1228873080533218' +
//                 '&redirect_uri=http://localhost:3000/api/facebook/callback'+
//                 '&scope=public_profile');}
//         })
// })

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