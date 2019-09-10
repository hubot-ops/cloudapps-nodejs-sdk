const assert = require('assert');
const chai = require('chai');
const CloudApps = require('../../../cloudapps');

const accessToken = process.env.npm_config_access_token;
const client = new CloudApps.Client(accessToken);
describe('Product action', function() {
    describe('List of products.', function () {
        it('Should return list of products', async function () {
            const productList = await client.product.getList();
            chai.expect(productList).to.be.a('array');
        });
    });

    describe('Product info.', function () {
        it('Should return product info', async function () {
            const productReference = 'flyer_ss_a4_fc';
            const productInfo = await client.product.getInfo(productReference);
            chai.expect(productInfo).to.be.an('object');
            chai.expect(productInfo).to.have.property('product_reference');
            assert.equal(productInfo.product_reference, productReference);
        });
    });
});
