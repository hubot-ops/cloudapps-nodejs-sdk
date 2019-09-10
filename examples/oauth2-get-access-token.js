const CloudApps = require('@cloudprinter/cloudapps');

const config = {
    client_id: '***',
    client_secret: '***',
    redirect_uri: 'http://www.your-site.com',
    scope: 'read-write'
};

const oAuth2 = new CloudApps.OAuth2(config);

// Step 1. Getting authorization code url.
const authorizationCodeUrl = oAuth2.getAuthorizationCodeUrl();

// Step 2. Getting access token by authorization code that comes to redirect url.
const code = '***';

oAuth2.getAccessToken(code)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
