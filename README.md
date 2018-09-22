# Webhook plugin for Porla

The webhook plugin can send HTTP POST requests with custom payload data. Use it
to integrate with other HTTP services.

## Usage

The `webhook` function takes two arguments. The first is the URL to POST data
to, and the second is a transform function that takes the event parameter and
returns an object that gets sent as the JSON payload.

```js
const { Porla } = require('@porla/porla');
const webhook = require('@porla-contrib/webhook');

const app = new Porla();

app.subscribe('torrent.added', [
    webhook('http://example.com', _ => {
        return {
            id: _.torrent.infoHash
        };
    })
]);
```
