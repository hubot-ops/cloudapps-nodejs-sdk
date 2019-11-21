export class Shipping {
    /**
     * @param client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get shipping level action.
     * @returns {Promise}
     */
    getLevels() {
        return this.client.httpClient.makePostRequest('shipping/levels');
    }

    /**
     * Get shipping countries action.
     * @returns {Promise}
     */
    getCountries() {
        return this.client.httpClient.makePostRequest('shipping/countries');
    }

    /**
     * Get shipping states action.
     * @returns {Promise}
     */
    getStates(countryReference) {
        const data = {country_reference: countryReference};
        return this.client.httpClient.makePostRequest('shipping/states', data);
    }
}
