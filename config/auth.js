module.exports = {

    'facebookAuth' : {
        'clientID'      : '1228873080533218',
        'clientSecret'  : '594d36c47a61140738c0b39212be34b0', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
        'plus'          : 'http://localhost:3000/auth/facebook/plus/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '145906865326-p3bdc48dreas6ip9ptdte0acb7f9oouj.apps.googleusercontent.com',
        'clientSecret'  : 'NAvQGCwV5wz0wViI0Akf_-RS',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};