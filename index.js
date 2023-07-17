const express = require('express');
const { Worker } = require('worker_threads');

const app = express();
const PORT = 4000;

let counter = 0;
app.get('/increment', (req, res) => {
  counter++;
  res.status(200).json({ counter });
});

app.get('/decrement', (req, res) => {
  counter--;
  res.status(200).json({ counter });
});

app.get('/sum', (req, res) => {
  const worker = new Worker('./worker.js');
  worker.on('message', ({ sum }) => {
    res.status(200).json({ sum });
  });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
