const app = require('./server/server');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log('Server listening on: ', port);
});
