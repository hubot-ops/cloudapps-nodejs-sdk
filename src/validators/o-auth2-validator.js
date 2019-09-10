import { Validator } from "./validator";
const Joi = require('joi');

export class OAuth2Validator extends Validator {

    validate() {
        let schema = Joi.object().keys({
            client_id: Joi.string().required(),
            client_secret: Joi.string().required(),
            redirect_uri: Joi.string().required(),
            scope: Joi.string().required()
        });

        return this.doValidation(schema);
    }
}
