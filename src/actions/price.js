import { OrderQuoteValidator } from "../validators/order-quote-validator";

export class Price {
    /**
     * @param client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Price lookup action.
     * @param data
     * @returns {*}
     */
    lookup(data) {
        let orderQuoteValidator = new OrderQuoteValidator(data);
        let validationResult = orderQuoteValidator.validate();
        if (validationResult.error !== null) {
            return Promise.reject(validationResult.error.data);
        } else {
            return this.client.httpClient.makePostRequest('prices/lookup', data);
        }
    }
}
