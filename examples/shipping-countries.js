const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);

cloudAppsClient.shipping.getCountries()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
