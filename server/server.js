const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const allowedOrigins = [
  'http://localhost:9000',
  'http://localhost:3000',
];

app.use(express.static(
  path.resolve(__dirname, '..', 'public'),
));

// Allow access from client origin
app.use('/api/reservations/', (req, res, next) => {
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  next();
});

app.get('/api/reservations/:roomId', (req, res) => {
  const { roomId } = req.params;
  db.getRoomAvailabilitiy(roomId)
    .then((doc) => {
      if (doc === null) {
        res.sendStatus(404);
      } else {
        res.send(doc);
      }
    })
    .catch((reason) => {
      console.log(reason);
      res.sendStatus(500);
    });
});

module.exports = app;
