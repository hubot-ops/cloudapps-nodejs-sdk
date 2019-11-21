import { HttpClient } from "../http/http-client";
const Joi = require('joi');

export class OAuth2 {
    /**
     * @param config
     */
    constructor(config) {
        this.baseUrl = 'https://api.cloudprinter.com/cloudauth/1.0/';
        this.config = config;
    }

    /**
     * Prepare url for getting authorization code.
     * @returns {string}
     */
    getAuthorizationCodeUrl() {
        this.validateConfig(['client_id', 'redirect_uri', 'scope']);

        const data = [
            'client_id=' + this.config.client_id,
            'redirect_uri=' + this.config.redirect_uri,
            'scope=' + this.config.scope,
            'response_type=code',
            'state=' + (this.config.state || encodeURIComponent('""'))
        ];
        return this.baseUrl + 'oauth2/authorize?' +  data.join('&');
    }

    /**
     * Get access token by url
     * @param code
     * @returns {*}
     */
    getAccessToken(code) {
        const httpClient = new HttpClient(this.baseUrl)
        try {
            this.validateConfig(['client_id', 'redirect_uri', 'client_secret']);
        } catch (e) {
            return Promise.reject(e);
        }

        const data = {
            code: code,
            client_id: this.config.client_id,
            client_secret: this.config.client_secret,
            redirect_uri: this.config.redirect_uri,
            grant_type: 'authorization_code'
        };

        return httpClient.makePostRequest('oauth2/token', data)
    }

    /**
     * Check, if config is correct.
     */
    validateConfig(requiredFields) {
        let keys = {};
        requiredFields.forEach((field) => {keys[field] = Joi.string().required()});
        const schema = Joi.object().keys(keys);
        const validationResult = Joi.validate(this.config, schema, {allowUnknown: true, abortEarly:true})

        if (validationResult.error !== null) {
            throw 'Config is not valid. ' + validationResult.error.details[0].message;
        }
    }
}
