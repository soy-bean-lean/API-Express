const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
  req.io.emit('seatsUpdated', db.seats);
});

router.route('/seats/:id').get((req, res) => {
  res.json(db.seats.find(item => item.id == req.params.id));
});

router.route('/seats').post((req, res) => {
  const { day, seat, client, email } = req.body;
  const index = {
    id: Math.floor(Math.random() + 99),
    day: day,
    seat: seat,
    client: client,
    email: email,
  }
  console.log(index);

  if (db.seats.some(item => (item.seat === index.seat && item.day === index.day))) {
    res.json({ message: 'The slot is already taken...' });
  }
  else {
    db.seats.push(index);
    req.io.emit('seatsUpdated', db.seats);
    res.json({ message: 'OK' });
  }
});

router.route('/seats/:id').put((req, res) => {
  const seats = db.seats.find(item => item.id == req.params.id);
  seats.day = req.body.day;
  seats.seat = req.body.seat;
  seats.client = req.body.client;
  seats.email = req.body.email;
  res.json({ message: 'OK' });
});

router.route('/seats/:id').delete((req, res) => {
  let index = db.seats.find(item => item.id === req.query.id);
  db.seats.splice(index, 1);
  res.json({ message: 'OK' });
});

module.exports = router;