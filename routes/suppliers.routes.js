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
  const newSupplier = {
    id: Date.now(),
    name: req.body.name,
  };
  res.status(201).json(newSupplier);
});

router.put('/users/:id', (req, res) => {
  const suppliers = suppliers.find((u) => u.id === parseInt(req.params.id));
  if (suppliers) {
    suppliers.name = req.body.name;
    res.json(suppliers);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/suppliers/:id', (req, res) => {
  const suppliersIndex = suppliers.findIndex((u) => u.id === parseInt(req.params.id));
  if (suppliersIndex !== -1) {
    suppliers.splice(suppliersIndex, 1); 
    res.send('User deleted');
  } else {
    res.status(404).send('User not found');
  }
});