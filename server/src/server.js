import express from 'express';
import db from './database';
import ssr from './lib/ssr';

const app = express();
const allowedOrigins = [
  'http://localhost:9000',
  'http://localhost:3000',
];

// Allow access from client origin
app.use('/', (req, res, next) => {
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  next();
});

app.get('/room/:roomId$', (req, res) => {
  const { roomId } = req.params;
  db.getRoomAvailabilitiy(roomId)
    .then((doc) => {
      res.send(ssr(doc, roomId));
    })
    .catch((reason) => {
      console.log(reason);
      res.sendStatus(500);
    });
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

export default app;
