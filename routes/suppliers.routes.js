const express = require('express');
const router = express.Router()

const suppliers = [
    { id: 1, name: 'Dude 1' },
    { id: 2, name: 'Dude 2' },
  ];

router.get('/suppliers', (_req, res) => {
  res.json(suppliers);
});

router.post('/suppliers', (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  res.status(201).json(newUser);
});