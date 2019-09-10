export class Product {
    /**
     * @param client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * Get product list action.
     * @returns {Promise}
     */
    getList() {
        return this.client.httpClient.makePostRequest('products');
    }

    /**
     * Get product info action.
     * @param {string} productReference
     */
    getInfo(productReference) {
        const data = {product_reference: productReference};
        return this.client.httpClient.makePostRequest('products/info', data);
    }
}
