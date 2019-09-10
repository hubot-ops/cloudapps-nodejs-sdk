const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);

cloudAppsClient.shipping.getLevels()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
