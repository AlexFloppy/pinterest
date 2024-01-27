const express = require('express');
const router = express.Router();


router.get('/pins/:pinId', (req, res) => {
  res.send(req.params.userId);
});

router.post('/', (req, res) => {
  res.send('created');
});

router.delete('/:id', (req, res) => {
    res.send('deteted');
});

module.exports = router;