const express = require('express');
const router = express.Router();
const PinService = require('../modules/pin/service');
const authenticate = require('../middlewares/authenticate');

router.get('/:id', authenticate, async (req, res) => {
    const pin = await PinService.getById(req.params.id);
    res.send(pin);
  });

// router.get('/boards/:boardId', (req, res) => {
//   res.send(req.params.userId);
// });

// router.get('/:id', (req, res) => {
//     res.send(req.params.id);
// });

router.post('/', authenticate, async (req, res) => {
    const pin = await PinService.create({...req.body, UserId: req.user.id});
    res.send(pin);
});

// router.delete('/:id', (req, res) => {
//     res.send('deteted');
// });

// router.put('/:id', authenticate, async (req, res) => {
//     const user = await UserService.updateById(req.params.id, req.body);
//     res.send(user);
//   });

module.exports = router;