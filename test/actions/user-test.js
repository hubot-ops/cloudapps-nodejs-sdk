const chai = require('chai');
const CloudApps = require('../../../cloudapps');

const accessToken = process.env.npm_config_access_token;
const client = new CloudApps.Client(accessToken);
describe('User action', function() {
    describe('User info.', function () {
        it('Should return user info', async function () {
            const userInfo = await client.user.getInfo();
            chai.expect(userInfo).to.be.an('object');
            chai.expect(userInfo).to.have.property('organization');
            chai.expect(userInfo).to.have.property('user');
        });
    });
});
