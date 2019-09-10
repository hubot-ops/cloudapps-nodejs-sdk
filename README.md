# CloudApps NodeJS SDK
The Cloudprinter.com NodeJS SDK is a package with useful features that enable App developers to easily integrate their application with Cloudprinter.com and make requests to our CloudApps API. This NodeJs SDK makes it easy to set up the integration between your App and the Cloudprinter.com Print Cloud to request instant pricing, post print orders, get production signals back, and more. 

The CloudApps API is exclusively designed for app developers.

We at Cloudprinter.com have connected 150+ printers to print & ship print products in almost any country in the world. Whether this is around the corner or at the other side of the globe, we've got you covered: we can deliver 500+ different products in more than 100 countries currently.

Our platform makes use of smart routing algoritms to route any print job to the most local and qualified printer. Based on location, performance, price and production options, your print job is routed by these algorithms to the nearest printing facility near your delivery address to help you save on transit times and costs.

Visit our [website](https://www.cloudprinter.com) for more information on all the products and services that we offer.

## Installation 
The CloudApps SDK package can be installed with npm. Run this command:
```
npm i @cloudprinter/cloudapps --save
```

## Prerequisites
* npm (for installation)
* nodejs 6.0 or above
* Cloudprinter.com Print Cloud account

## Creating an app
The CloudApps API is designed as backend for integrated apps. An app could as an example an e-commerce system integration.

Each app needs to be created in the Cloudprinter.com system. Please contact Cloudprinter.com support team for this.

## Authentication
Authentication is done via OAuth2.

Each app requires a unique client identifier, client password and a return URL. This information is required for Cloudprinter.com support team when creating the app.

The Cloudprinter.com user login grants access to the CloudApps API.

## Examples
### Get access token.
```
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


```
### Get list of orders.
```
const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);

cloudAppsClient.order.getList()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
### Create new order.
```
const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);
const data = {
    "reference": "order-1234",
    "email": "test@mail.com",
    "addresses": [
        {
            "type": "delivery",
            "firstname": "John",
            "lastname": "Doe",
            "street1": "Street1",
            "zip": "1071 JA",
            "city": "Amsterdam",
            "country": "NL",
            "email": "test@mail.com",
            "phone": "+31-655-538-848"
        }
    ],
    "items": [
        {
            "reference": "item-1",
            "product_reference": "textbook_cw_a4_p_bw",
            "count": 1,
            "files": [
                {
                    "type": "cover",
                    "url": "https://s3-eu-west-1.amazonaws.com/demo.cloudprinter.com/b52f510a5e2419f67c4925153ec0c080_v2/CP_Sample_doc_A4_Book_Cover_Textbook_80_gsm_Casewrap_v2.1.pdf",
                    "md5sum": "15c518d3d105ecaaab014df2456dd22b"
                },
                {
                    "type": "book",
                    "url": "https://s3-eu-west-1.amazonaws.com/demo.cloudprinter.com/b52f510a5e2419f67c4925153ec0c080_v2/CP_Sample_doc_A4_Book_Interior_Textbook_v2.1.pdf",
                    "md5sum": "15c518d3d105ecaaab014df2456dd22b"
                }
            ],
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
            ],
            "quote": "*"
        }
    ]
};

cloudAppsClient.order.create(data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
