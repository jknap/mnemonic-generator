const addresses = require('./constants/addresses');
const generator = require('./generator');

const randomAddress = addresses[Math.floor(Math.random()*addresses.length)];

const mnemonic = generator(randomAddress);

console.log(`Random address: ${randomAddress}`);
console.log(`Corresponding mnemonic: ${mnemonic}`);
