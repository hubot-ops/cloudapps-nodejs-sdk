export class WebHook {
    constructor(client) {
        this.client = client;
    }

    /**
     * @param {string} url
     * @returns {*}
     */
    subscribe(url) {
        const data = {url}
        return this.client.httpClient.makePostRequest('cloudsignal/webhooks', data);
    }

    /**
     * @param {number} webHookId
     */
    unSubscribe(webHookId) {
        return this.client.httpClient.makeDeleteRequest('cloudsignal/webhooks/' + webHookId);
    }
}
