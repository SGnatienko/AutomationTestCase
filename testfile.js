const mocha = require('mocha');
const assert = require('assert');

<<<<<<< HEAD
=======
// Подключение других файлов с тестами
>>>>>>> 899ba933b2c14798b5de472691ff9029082ad2bd
require('./VerifyPriceFilter');
require('./AddItemBasket');
require('./SearchTheItem');
require('./CorrectProductBasket');

describe('My test suite', function() {
  it('should pass this test', function() {
    assert.strictEqual(1 + 1, 2);
  });
});