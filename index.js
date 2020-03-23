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
  start(3002);
} else {
  rl.question('Listen on which port? ', (_port = port) => {
    start(_port);
    rl.close();
  });
}
