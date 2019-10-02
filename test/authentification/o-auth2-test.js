const assert = require('assert');
const chai = require('chai');
const CloudApps = require('../../../cloudapps');

describe('OAuth2 test', function() {
    describe('Config validation', function () {
        it('Config is not valid. Client id is missing', function () {
            const config = {
                client_secret: '345',
                redirect_uri: 'http://www.your-site.com',
                scope: 'read-write'
            };

            const oAuth2 = new CloudApps.OAuth2(config);
            chai.expect(() => oAuth2.getAuthorizationCodeUrl()).to.throw('"client_id" is required');
        });

        it('Config is not valid. Redirect uri is missing', function () {
            const config = {
                client_id: '123',
                client_secret: '345',
                scope: 'read-write'
            };
            const oAuth2 = new CloudApps.OAuth2(config);
            chai.expect(() => oAuth2.getAuthorizationCodeUrl()).to.throw('"redirect_uri" is required');
        });
    });

    describe('Get authorization code url', function() {
        it('Should return authorization code url', function() {
            const config = {
                client_id: '123',
                client_secret: '345',
                redirect_uri: 'http://www.your-site.com',
                scope: 'read-write'
            };

            const oAuth2 = new CloudApps.OAuth2(config);
            const expected = 'https://api.cloudprinter.com/cloudauth/1.0/oauth2/authorize?client_id=123&redirect_uri=http://www.your-site.com&scope=read-write&response_type=code&state=%22%22';
            const authorizationCodeUrl = oAuth2.getAuthorizationCodeUrl(config);
            assert.equal(authorizationCodeUrl, expected)
        });
    });

    describe('Get access token.', function () {
        it('Should return an error, because the code is not valid', async function () {
            const config = {
                client_id: '123',
                client_secret: '345',
                redirect_uri: 'http://www.your-site.com',
                scope: 'read-write'
            };
            const code = '123';
            const oAuth2 = new CloudApps.OAuth2(config);
            try {
                await oAuth2.getAccessToken(code);
            } catch (e) {
                chai.expect(e).to.have.property('error');
            }
        });
    })
});
