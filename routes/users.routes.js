const express = require('express')
const router = express.Router()

 const users = [
    { id: 1, name: 'budbud' },
    { id: 2, name: 'ungoy' },
  ];

router.get('/users', (_req, res) => {
 
  res.json(users);
});

