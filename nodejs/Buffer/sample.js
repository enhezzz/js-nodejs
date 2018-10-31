const fs = require('fs')
const file = fs.readFileSync('sample.txt')

fs.writeFileSync('1-copy.txt',file)
console.log(file)
console.log(Buffer.isBuffer(file))