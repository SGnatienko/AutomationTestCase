const mocha = require('mocha');
const assert = require('assert');

require('./VerifyPriceFilter');
require('./AddItemBasket');
require('./SearchTheItem');
require('./CorrectProductBasket');

describe('My test suite', function() {
  it('should pass this test', function() {
    assert.strictEqual(1 + 1, 2);
  });
});