import { OrderValidator } from "../validators/order-validator";
import { OrderQuoteValidator } from "../validators/order-quote-validator";
import { CreateOrderAdapter } from "../adapters/create-order-adapter";

export class Order {
    /**
     * @param client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Order create action.
     * @param data
     * @returns{Promise}
     */
    async create(data) {
        data.apikey = this.client.apiKey;

        const createOrderAdapter = new CreateOrderAdapter();
        return createOrderAdapter.apply(data).then((data) => {
            let orderValidator = new OrderValidator(data);

            let validationResult = orderValidator.validate();
            if (validationResult.error !== null) {
                return Promise.reject(validationResult.error.data);
            } else {
                return this.client.httpClient.makePostRequest('orders/add', data);
            }
        });
    }

    /**
     * Get orders action.
     * @returns {Promise}
     */
    getList() {
        const data = {apikey: this.client.apiKey};
        return this.client.httpClient.makePostRequest('orders', data);
    }

    /**
     * Cancel order action.
     * @param orderReference
     * @returns {Promise}
     */
    cancel(orderReference) {
        const data = {
            reference: orderReference
        };
        return this.client.httpClient.makePostRequest('orders/cancel', data);
    }

    /**
     * Get order info action.
     * @param orderReference
     * @returns {Promise}
     */
    getInfo(orderReference) {
        const data = {
            reference: orderReference
        };
        return this.client.httpClient.makePostRequest('orders/info', data);
    }

    /**
     * Get order log action.
     * @param orderReference
     * @returns {Promise}
     */
    getLog(orderReference) {
        const data = {
            reference: orderReference
        };
        return this.client.httpClient.makePostRequest('orders/log', data);
    }

    /**
     * Request order quote action.
     * @param data
     * @returns {Promise}
     */
    quote(data) {
        let orderQuoteValidator = new OrderQuoteValidator(data);
        let validationResult = orderQuoteValidator.validate();
        if (validationResult.error !== null) {
            return Promise.reject(validationResult.error.data);
        } else {
            return this.client.httpClient.makePostRequest('orders/quote', data);
        }
    }

    /**
     * Get quote info action.
     * @param quoteHash
     * @returns {Promise}
     */
    quoteInfo(quoteHash) {
        const data = {
            quote: quoteHash
        };
        return this.client.httpClient.makePostRequest('orders/quote/info', data);
    }
}
