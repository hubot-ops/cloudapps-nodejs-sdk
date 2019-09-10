const chai = require('chai');
const CloudApps = require('../../../cloudapps');

const accessToken = process.env.npm_config_access_token;
const client = new CloudApps.Client(accessToken);
describe('Shipping action', function() {
    describe('List of levels.', function () {
        it('Should return list of shipping levels', async function () {
            const response = await client.shipping.getLevels();
            chai.expect(response.shipping_levels).to.be.a('array');
        });
    });

    describe('List of countries.', function () {
        it('Should return list of shipping countries', async function () {
            const response = await client.shipping.getCountries();
            chai.expect(response.shipping_countries).to.be.a('array');
        });
    });
});
