const express = require('express');
const router = express.Router();


router.get('/me', (req, res) => {
  res.send('me');
});

router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

router.put('/', (req, res) => {
    res.send('update');
});

module.exports = router;