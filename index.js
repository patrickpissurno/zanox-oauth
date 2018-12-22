/** 
 * zanox-oauth was developed by Patrick Pissurno
 * and is licensed under the MIT license.
**/

const crypto = require('crypto');
const uuid = require('uuid/v1');
const assert = require('assert');

function getTimestamp(){
    return new Date().toGMTString();
}

function getNonce(){
    return uuid();
}

module.exports = class ZanoxOAuth {

    constructor(connectID, secretKey){
        this.secretKey = secretKey;
        this.connectID = connectID;

        assert(connectID != null, 'connectID cannot be null');
        assert(connectID != null, 'secretKey cannot be null');
    }

    getSignature(method, url, timestamp, nonce){
        assert(method != null, 'method cannot be null');
        assert(url != null, 'url cannot be null');
        assert(url.indexOf('api.zanox.com') !== -1, 'invalid url');

        method = method.toUpperCase();

        assert(method === 'GET' || method === 'POST' || method === 'PUT' || method === 'DELETE', 'method must be either GET, POST, PUT or DELETE');
    
        if(!timestamp)
            timestamp = getTimestamp();

        if(!nonce)
            nonce = getNonce();

        let uri = url.replace(/https?:\/\/api\.zanox\.com\/(xml|json)\/[0-9]{4}-[0-9]{2}-[0-9]{2}/ig, '');

        let signature = method + uri + timestamp + nonce;
        return crypto.createHmac('sha1', this.secretKey).update(signature).digest('base64');
    }

    getAuthorizationHeaders(method, url){
        let timestamp = getTimestamp();
        let nonce = getNonce();

        return {
            Authorization: 'ZXWS ' + this.connectID + ':' + this.getSignature(method, url, timestamp, nonce),
            Date: timestamp,
            nonce: nonce
        };
    }

}