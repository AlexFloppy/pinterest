const express = require("express");
const router = express.Router();
const PinService = require("../modules/pin/service");
const authenticate = require("../middlewares/authenticate");
const endpointHandler = require("../utils/endpoint-handler");


router.get(
  "/:id",
  authenticate,
  endpointHandler(async (req, res) => {
    const pin = await PinService.getById(req.params.id);
    res.send(pin);
  })
);

router.get(
  "/boards/:boardId",
  authenticate,
  endpointHandler(async (req, res) => {
    const pin = await PinService.getByBoardId(req.params.boardId);
    res.send(pin);
  })
);

router.get(
  "/users/:authorId",
  authenticate,
  endpointHandler(async (req, res) => {
    const pin = await PinService.getByAuthorId(req.params.authorId);
    res.send(pin);
  })
);

router.post(
  "/",
  authenticate,
  endpointHandler(async (req, res) => {
    const pin = await PinService.create({ ...req.body, authorId: req.user.id });
    res.send(pin);
  })
);

router.put(
  "/",
  authenticate,
  endpointHandler(async (req, res) => {
    const pin = await PinService.updateById(req.body);
    res.send(pin);
  })
);

router.delete(
  "/:id",
  authenticate,
  endpointHandler(async (req, res) => {
    await PinService.removeById(req.params.id);
    res.status(200).end();
  })
);

module.exports = router;
