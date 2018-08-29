const hash = require('object-hash');
const words = require('./constants/words')

const addressToMnemonic = (address) => {
  addressHash = hash(address);
  index = parseInt(addressHash, 16) % words.length;
  return words[index];
}

module.exports = addressToMnemonic;
