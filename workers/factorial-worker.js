// Find factorial of number
const { parentPort, workerData } = require('worker_threads');

const { num } = workerData;
let factorial = 1;

console.log(`Calculating factorial of ${num}`);
for (let i = 1; i <= num; i++) {
    factorial = factorial * (i);
}
console.log(`Found factorial ${factorial}`);

parentPort.postMessage({ factorial });
