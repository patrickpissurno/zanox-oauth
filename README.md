# zanox-oauth
Implementation of Zanox OAuth REST following the [documentation](https://developer.zanox.com/web/guest/authentication/zanox-oauth/oauth-rest).

## Downloads
- Source code on [GitHub](https://github.com/patrickpissurno/zanox-oauth)
- Get it from [NPM](https://www.npmjs.com/package/zanox-oauth)

## How it works
When making requests to private resources of the [Zanox API](https://developer.zanox.com/web/guest/publisher-api-2011/), you should use this library to generate the required headers for you. Then, you just have to include them with your request.

In order to use this library you should grab your ```Connect ID``` and your ```Secret Key``` from the [Zanox Marketplace Console](https://publisher.zanox.com/ws_gettingstarted/ws.gettingstarted.html).

### Usage example

```js
    const ZanoxOAuth = require('zanox-oauth');
    const oauth = new ZanoxOAuth('your connect id goes here', 'your secret key goes here');
    const request = require('request');
    
    const url = 'https://api.zanox.com/json/2011-03-01/reports/sales/date/2018-12-22';
    const opts = {
        url: url,
        headers: oauth.getAuthorizationHeaders('GET', url)
    };
    
    request.get(opts, (err, httpResponse, body) => console.log(err, body));
```
The ```request``` module is not needed. You can use whatever library you want to make HTTP requests (like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [axios](https://www.npmjs.com/package/axios)).

## License
MIT License

Copyright (c) 2018 [Patrick Pissurno](https://patrickpissurno.com.br/)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
