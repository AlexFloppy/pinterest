const express = require('express');
const router = express.Router();


router.get('/boards/:boardId', (req, res) => {
  res.send(req.params.userId);
});

router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.post('/', (req, res) => {
    res.send('created');
});

router.delete('/:id', (req, res) => {
    res.send('deteted');
});

module.exports = router;