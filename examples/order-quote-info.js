const CloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const quoteHash = "948b501933fdc16d57a7faea85742780d41ab2edf62d36328a5bfbeb1f64f7f3";
const cloudAppsClient = new CloudApps.Client(accessToken);

cloudAppsClient.order.quoteInfo(quoteHash)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
