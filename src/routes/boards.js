const express = require('express');
const router = express.Router();
const BoardService = require('../modules/board/service');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, async (req, res) => {
  const board = await BoardService.create({...req.body, authorId: req.user.id});
  res.send(board);
});

router.get('/:id', authenticate, async (req, res) => {
  const board = await BoardService.getById(req.params.id);
  res.send(board);
});

router.get('/users/:userId', authenticate, async (req, res) => {
  const board = await BoardService.getByAuthorId(req.params.userId);
  res.send(board);
});

router.delete('/:id', authenticate, async (req, res) => {
  await BoardService.removeById(req.params.id);
  res.status(200).end();
});

router.put('/', authenticate, async (req, res) => {
    const board = await BoardService.updateById(req.body);
    res.send(board);
  });

module.exports = router;