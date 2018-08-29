var hash = require('object-hash');
var words = require('./words');

var SALT = 'SCHWIFTY';

function getSingleMnemonic (address) {
  var objHash = hash(address);
  var index = parseInt(objHash, 16) % words.length;
  return words[index];
}
function addressToMnemonic (address) {
  var word1 = getSingleMnemonic(address);
  var word2 = getSingleMnemonic(address + SALT);
  return word1 + ' ' + word2
}

module.exports = addressToMnemonic;
