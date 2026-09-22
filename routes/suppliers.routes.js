const express = require('express');
const router = express.Router()

const suppliers = [
    { id: 1, name: 'Dude 1' },
    { id: 2, name: 'Dude 2' },
  ];

router.get('/orders', (_req, res) => {
  res.json(suppliers);
});
