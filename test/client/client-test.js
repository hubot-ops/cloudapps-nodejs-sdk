const assert = require('assert');
const CloudApps = require('../../../cloudapps');

describe('Client test', function() {
    const accessToken = process.env.npm_config_access_token;
    const client = new CloudApps.Client(accessToken);
    describe('Check client header', function() {
        it('Header should be configured correct', function() {
            assert.equal(client.httpClient.headers['Authorization'], "Bearer " + accessToken);
            assert.equal(client.httpClient.headers['Content-Type'], "application/json");
        });

        it('Actions should be initialized and ready for use', function () {
            assert.equal(typeof client.order, 'object');
            assert.equal(typeof client.product, 'object');
            assert.equal(typeof client.price, 'object');
            assert.equal(typeof client.shipping, 'object');
            assert.equal(typeof client.user, 'object');
            assert.equal(typeof client.webHook, 'object');
        });
    });
});
