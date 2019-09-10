const axios = require('axios');

export class HttpClient {
    constructor(baseUrl, headers) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    /**
     * @param {string} uri
     * @param {object} data
     */
    makePostRequest(uri, data = {}) {
        const options =  {
            headers: this.headers
        };

        console.log(this.baseUrl + uri);

        return axios.post(this.baseUrl + uri, data, options)
            .then(function (response) {
                return Promise.resolve(response.data);
            })
            .catch(function (error) {
                return Promise.reject(error.response.data);
            });
    }

    /**
     * @param {string} uri
     * @param {object} data
     */
    makeDeleteRequest(uri, data = {}) {
        const headers = this.headers;
        return axios.delete(this.baseUrl + uri, {data, headers})
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error.response.data
            });
    }
}
