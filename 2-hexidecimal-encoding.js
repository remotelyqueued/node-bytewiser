const { Buffer } = require('node:buffer');

const bytes = [0, 15, 24, 3, 250, 83];
const buffer = Buffer.from(bytes);

console.log(buffer.toString('hex'));
// console.log(buffer.toString());
// console.log(buffer);

// official solution
// var bytes = [0, 15, 24, 3, 250, 83];
// var buff = new Buffer(bytes);
// console.log(buff.toString('hex'));
