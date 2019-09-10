const chai = require('chai');
const CloudApps = require('../../../cloudapps');

const accessToken = process.env.npm_config_access_token;
const client = new CloudApps.Client(accessToken);
describe('WebHook action', function() {
    describe('Subscribe.', function () {
        it('Should subscribe on cloudprinter events', async function () {
            const url = 'http://test.com';
            const response = await client.webHook.subscribe(url);
            chai.expect(response).to.be.an('object');
            chai.expect(response).to.have.property('status');
            chai.expect(response).to.have.property('url');
        });
    });
    describe('Unsubscribe.', function () {
        it('Should unsubscribe of cloudprinter events', async function () {
            const webHookId = 171;
            const response = await client.webHook.unSubscribe(webHookId);
            chai.expect(response).to.be.an('object');
            chai.expect(response).to.have.property('status');
        });
    });
});
