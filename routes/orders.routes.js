const express = require('express')
const router = express.Router()

const orders = [
  { id: 1, uname: 'Candia' },
  { id: 2, uname: 'Kim' },
];

app.get('/users', (_req, res) => {
  res.json(orders);
});

module.exports = router