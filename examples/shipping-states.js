const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);
const countryReference = 'US';

cloudAppsClient.shipping.getStates(countryReference)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
