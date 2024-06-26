const express = require("express");
const router = express.Router();
const { getList, create } = require("../modules/user/service");
const UserService = require("../modules/user/service");
const authenticate = require("../middlewares/authenticate");
const endpointHandler = require("../utils/endpoint-handler");


router.get(
  "/me",
  authenticate,
  endpointHandler(async (req, res) => {
    const user = await UserService.getById(req.user.id);
    res.send(user);
  })
);

router.get(
  "/:id",
  authenticate,
  endpointHandler(async (req, res) => {
    const user = await UserService.getById(req.params.id);
    res.send(user);
  })
);

router.put(
  "/:id",
  authenticate,
  endpointHandler(async (req, res) => {
    const user = await UserService.updateById(req.params.id, req.body);
    res.send(user);
  })
);

module.exports = router;
