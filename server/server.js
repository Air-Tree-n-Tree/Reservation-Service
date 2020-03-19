const express = require('express');
const db = require('../database');

const app = express();

// Allow access from client origin
app.use('/api/reservations/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
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
