const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);
const data = {
    "country": "NL",
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

cloudAppsClient.order.quote(data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
