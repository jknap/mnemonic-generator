const hash = require('object-hash');
const words = require('./constants/words')

const SALT = "SCHWIFTY"

const getSingleMnemonic = (address) => {
  objHash = hash(address);
  index = parseInt(objHash, 16) % words.length;
  return words[index];
}
const addressToMnemonic = (address) => {
  word1 = getSingleMnemonic(address);
  word2 = getSingleMnemonic(address + SALT);
  return word1 + ' ' + word2
}

module.exports = addressToMnemonic;
