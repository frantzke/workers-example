# workers-example
Node express app to demonstrate the use of worker threads. 

The app has three routes
* `/increment` - increments internal counter by one and returns it
* `/decrement` - decrements internal counter by one and returns it
* `/sum` - finds the sum of 0 to 10,000,000,000

The computationally heavy task of `/sum` is done in a woker thread, freeing the main thread to return `/increment` and `/decrement` values. 
Without the worker thread, `/increment` and `/decrement` would have to wait for `/sum` to complete since Node is single threaded. 



## Installation
1. `npm install`
2. `node index.js` or VSCode `Launch Program`
