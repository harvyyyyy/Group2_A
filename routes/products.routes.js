const express = require('express')
const router = express.Router()

const products = [
    { id: 1, pname: 'Motor', price: 500 },
    { id: 2, pname: 'Sakyanan', price: 600000 },
  ];

router.get('/users', (_req, res) => {
 res.json(products);
});