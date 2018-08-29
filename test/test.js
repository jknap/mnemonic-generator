var assert = require('assert');
var generator = require('../');

var ADDRESS = '0xdd67Ee2d65a89F827eC9c0335a93F8105Aa969b8';
var MNEMONIC = 'everest wheel'


describe('Generator', function() {
  it('should return the mnemonic corresponding to the address', function() {
      var mnemonic = generator(ADDRESS)
      assert.equal(mnemonic, MNEMONIC);
  });
});
