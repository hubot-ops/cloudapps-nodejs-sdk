const CloudApps = require('@cloudprinter/cloudapps');

// Getting authorization code url
const config = {
    client_id: '***',
    redirect_uri: 'http://www.your-site.com',
    scope: 'read-write'
};

const oAuth2 = new CloudApps.OAuth2(config);
const authorizationCodeUrl = oAuth2.getAuthorizationCodeUrl();

// Getting access token by authorization code that comes to redirect url.
const code = '***';
const config = {
    client_id: '***',
    client_secret: '***',
    redirect_uri: 'http://www.your-site.com',
};

const oAuth2 = new CloudApps.OAuth2(config);
oAuth2.getAccessToken(code)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
