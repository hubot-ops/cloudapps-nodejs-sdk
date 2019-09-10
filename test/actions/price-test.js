const assert = require('assert');
const chai = require('chai');
const should = require('chai').should();
const CloudApps = require('../../../cloudapps');

const accessToken = process.env.npm_config_access_token;
const client = new CloudApps.Client(accessToken);
describe('Price action', function() {
    describe('Price lookup', function () {
        it('The quote should be successfully generated', async function () {
            const data = {
                "country": "NL",
                "items": [
                    {
                        "reference": "99",
                        "product_reference": "textbook_cw_a6_p_bw",
                        "count": 2,
                        "options": [
                            {
                                "option_reference": "cover_finish_gloss",
                                "count": 1
                            },
                            {
                                "option_reference": "pageblock_80off",
                                "count": 1
                            },
                            {
                                "option_reference": "cover_130mcg",
                                "count": 1
                            },
                            {
                                "option_reference": "total_pages",
                                "count": 100
                            }
                        ]
                    }
                ]
            };

            const quote = await client.price.lookup(data);
            chai.expect(quote).to.be.an('object');
            should.exist(quote.price);
        });

        it('Price lookup is  not possible. Country is required.', async function () {
            const data = {
                "items": [
                    {
                        "reference": "1",
                        "product_reference": "brochure_pb_a5_p_fc",
                        "count": 68,

                        "options": [
                            {
                                "option_reference": "pageblock_130mcs",
                                "count": 1
                            },
                            {
                                "option_reference": "cover_200mcs",
                                "count": 1
                            },
                            {
                                "option_reference": "total_pages",
                                "count": 100
                            }
                        ]
                    }
                ]
            };

            try {
                await client.price.lookup(data)
            } catch (e) {
                assert.equal(e.error.info, '"country" is required');
            }
        })
    });
});
