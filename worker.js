const { parentPort } = require("worker_threads")

console.log("Calculating Sum")
let sum = 0;
// Calculate sum of 0 to 10,000,000,000
for (let i = 0; i < 10000000000; i++) {
    sum += i;
}

parentPort.postMessage({sum});




