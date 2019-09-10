const cloudApps = require('@cloudprinter/cloudapps');

const url = 'http://test.com';
const accessToken = '*';
const client = new cloudApps.Client(accessToken);

client.webHook.subscribe(url)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
