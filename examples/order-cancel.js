const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const cloudAppsClient = new CloudApps.Client(accessToken);
const orderReference = 'order-123';

cloudAppsClient.order.cancel(orderReference)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
