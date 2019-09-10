import { HttpClient } from "../http/http-client";

export class User {
    /**
     * @param client
     */
    constructor(client) {
        this.client = Object.assign({}, client);
        const baseUrl = 'https://api.cloudprinter.com/clouduser/1.0/';
        this.client.httpClient = new HttpClient(baseUrl, client.headers);
    }

    /**
     * Get user info action.
     * @returns {*}
     */
    getInfo() {
        return this.client.httpClient.makePostRequest('info');
    }
}
