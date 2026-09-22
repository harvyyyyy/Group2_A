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

router.delete('/orders/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (orderIndex !== -1) {
    users.splice(orderIndex, 1);
    res.send('Order deleted');
  } else {
    res.status(404).send('Order not found');
  }
});

module.exports = router