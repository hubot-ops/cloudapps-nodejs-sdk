const cloudApps = require('@cloudprinter/cloudapps');

const accessToken = '*';
const webHookId = 1;
const client = new cloudApps.Client(accessToken);

client.webHook.unSubscribe(webHookId)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
