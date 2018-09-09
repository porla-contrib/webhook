const assert = require('assert');
const webhook = require('../');

describe('Webhook', () => {
    it('returns a function', () => {
        const func = webhook('test.com');
        assert.ok(func instanceof Function);
    })
});
