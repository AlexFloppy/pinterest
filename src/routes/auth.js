const express = require("express");
const AuthService = require("../modules/auth/service");
const router = express.Router();
const endpointHandler = require("../utils/endpoint-handler");


router.post(
  "/register",
  endpointHandler(async (req, res) => {
    const user = await AuthService.register(req.body);
    res.json(user);
  })
);

router.post(
  "/login",
  endpointHandler(async (req, res) => {
    const result = await AuthService.login(req.body);
    res.json(result);
  })
);

module.exports = router;
