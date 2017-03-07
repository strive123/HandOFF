/**
 * Created by Admin on 3/6/2017.
 */
var google = require('googleapis');
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
var googleAuth = require('google-auth-library');
var auth = new googleAuth();
var clientSecret = "NAvQGCwV5wz0wViI0Akf_-RS";
var clientId = "145906865326-p3bdc48dreas6ip9ptdte0acb7f9oouj.apps.googleusercontent.com";
var redirectUrl = "http://localhost:3000/callback";
var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
});

var opn = require('opn');
module.exports = {
    getNewToken: function (code, callback)
        {
            oauth2Client.getToken(code, function (err, token) {
                if (err) {
                    console.log('Error while trying to retrieve access token', err);
                    return;
                }
                oauth2Client.credentials = token;
                callback(oauth2Client);
            });
        },

    run: function ()  {
            opn(authUrl);
        },

    spreadsheet: function(auth, cmtArray, callback) {
            var sheets = google.sheets('v4');
            sheets.spreadsheets.create({
                auth: auth
            }, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    sheets.spreadsheets.values.update({
                        auth: auth,
                        spreadsheetId: res.spreadsheetId,
                        range: 'A:A',
                        valueInputOption: 'RAW',
                        resource: {
                            range: 'A:A',
                            majorDimension: 'ROWS',
                            values:    cmtArray

                        }
                    })
                    callback(res.spreadsheetUrl);
                }
            })
        }
}