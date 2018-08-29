const generator = require('../');

const userAddress = process.argv[2];

const mnemonic = generator(userAddress);

console.log(`User address: ${userAddress}`);
console.log(`Corresponding mnemonic: ${mnemonic}`);
