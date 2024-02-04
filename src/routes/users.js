const express = require('express');
const {getList, create} = require('../modules/user/service');
const router = express.Router();


router.get('/me', async (req, res) => {
  const newUser = await create();
  const users = await getList();
  res.json({newUser, users});
});

router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

router.put('/', (req, res) => {
    res.send('update');
});

module.exports = router;