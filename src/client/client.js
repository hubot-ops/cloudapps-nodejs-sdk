import { Order } from "../actions/order";
import { Product } from "../actions/product";
import { Price } from "../actions/price"
import { Shipping } from "../actions/shipping";
import { User } from "../actions/user";
import { WebHook } from "../actions/web-hook";
import { HttpClient } from "../http/http-client";

export class Client {
    /**
     * @param accessToken
     */
    constructor(accessToken) {
        this.baseUrl = 'https://api.cloudprinter.com/cloudapps/1.0/';
        this.headers = {
            'Authorization': "Bearer " + accessToken,
            'Content-Type': 'application/json'
        };
        this.httpClient = new HttpClient(this.baseUrl, this.headers);
        this.order = new Order(this);
        this.product = new Product(this);
        this.price = new Price(this);
        this.shipping = new Shipping(this);
        this.user = new User(this);
        this.webHook = new WebHook(this);
    }
}
