const path = require('path');

console.log('Склейка шляхів:', path.join(__dirname, 'one', 'two'));
console.log('Получити абсолютний шлях:', path.resolve(__dirname, 'one', 'two'));


const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.cpus().length);