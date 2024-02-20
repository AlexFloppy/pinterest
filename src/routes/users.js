const express = require('express');
const {getList, create} = require('../modules/user/service');
const UserService = require('../modules/user/service');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
  const user = await UserService.getById(req.user.id);
  res.send(user);
});

router.get('/:id', authenticate, async (req, res) => {
  const user = await UserService.getById(req.params.id);
  res.send(user);
});

router.put('/:id', authenticate, async (req, res) => {
  const user = await UserService.updateById(req.params.id, req.body);
  res.send(user);
});

module.exports = router;