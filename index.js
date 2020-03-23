/* eslint-disable global-require */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = function startServer(port) {
  const app = require('./server/server');
  app.listen(port, () => {
    console.log('Server listening on: ', port);
  });
};

const port = process.env.PORT || 3002;

if (process.env.NODE_ENV === 'development') {
  start(port);
} else {
  rl.question('Listen on which port? (3002)', (_port) => {
    start(_port.length ? _port : port);
    rl.close();
  });
}
