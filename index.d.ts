/**
 * Type definitions for zanox-oauth
 * Project: zanox-oauth
 * Definitions by: Patrick Pissurno <https://patrickpissurno.com.br>
**/

export = ZanoxOAuth;

declare class ZanoxOAuth {
    connectID: string;
    secretKey: string;

    /**
     * 
     * Initializes the module with user's credentials
     * @export
     * @see https://publisher.zanox.com/ws_gettingstarted/ws.gettingstarted.html
     * @param {string} connectID Zanox's Connect ID variable
     * @param {string} secretKey  Zanox's Secret Key variable
     */
    constructor(connectID: string, secretKey: string);

    /**
     * 
     * Generates signature for a given combination of HTTP Method and Zanox API URL
     * @export
     * @see https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest
     * @param {string} method HTTP verb/method. Either GET, POST, PUT or DELETE
     * @param {string} url Zanox API URL (example: https://api.zanox.com/json/2011-03-01/reports/sales/date/2018-12-22)
     * @returns {string} signature as defined in https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest
     */
    getSignature(method: string, url: string): string;

    /**
     * 
     * Generates signature for a given combination of HTTP Method and Zanox API URL
     * @export
     * @see https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest
     * @param {string} method HTTP verb/method. Either GET, POST, PUT or DELETE
     * @param {string} url Zanox API URL (example: https://api.zanox.com/json/2011-03-01/reports/sales/date/2018-12-22)
     * @param {string} timestamp in GMT, format "EEE, dd MMM yyyy HH:mm:ss" (example: new Date().toGMTString())
     * @param {string} nonce unique random string, valid once, 20 or more characters
     * @returns {string} signature as defined in https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest
     */
    getSignature(method: string, url: string, timestamp: string, nonce: string): string;

    /**
     * 
     * Generates signature for a given combination of HTTP Method and Zanox API URL
     * @export
     * @see https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest
     * @param {string} method HTTP verb/method. Either GET, POST, PUT or DELETE
     * @param {string} url Zanox API URL (example: https://api.zanox.com/json/2011-03-01/reports/sales/date/2018-12-22)
     * @returns {ZanoxOAuth.AuthorizationHeaders} Object containing the Authorization headers. You should include them with your requests to the API.
     */
    getAuthorizationHeaders(method: string, url: string): ZanoxOAuth.AuthorizationHeaders;
}

declare namespace ZanoxOAuth {
    export interface AuthorizationHeaders {
        Authorization: string,
        Date: string,
        nonce: string
    }
}