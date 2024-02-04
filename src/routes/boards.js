const express = require('express');
const router = express.Router();


router.get('/users/:userId', (req, res) => {
  res.send(req.params.userId);
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.put('/:id', (req, res) => {
    res.send('update');
});

module.exports = router;