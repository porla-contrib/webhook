const request = require('request');

/**
 * Creates a new webhook.
 * @param {string} url The URL to target in the webhook.
 * @param {*} [itemToBody] An optional function to transform the item to a JSON object.
 * @returns {webhookFunc~inner} The webhook function.
 */
function webhookGenerator(url, itemToBody) {
    /**
     * Executes the webhook with the given item.
     * @param {*} item The item to act upon.
     * @returns {Promise<void>} A Promise which resolves when the request has been made.
     */
    const webhookFunc = (item) => {
        const transform = itemToBody || (_ => '');

        const reqOptions = {
            body: transform(item),
            json: true
        };

        return new Promise((resolve, reject) => {
            request.post(url, reqOptions, (err, resp, body) => {
                if (err) {
                    return reject(err);
                }

                return resolve();
            });
        });
    };

    return webhookFunc;
}

module.exports = webhookGenerator;
