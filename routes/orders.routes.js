const express = require('express')
const router = express.Router()

const orders = [
  { id: 1, uname: 'Candia' },
  { id: 2, uname: 'Kim' },
];

router.get('/orders', (_req, res) => {
  res.json(orders);
});

router.post('/orders', (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  res.status(201).json(newUser);
});

module.exports = router