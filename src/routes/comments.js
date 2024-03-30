const express = require("express");
const router = express.Router();
const CommentService = require("../modules/comment/service");
const authenticate = require("../middlewares/authenticate");
const endpointHandler = require("../utils/endpoint-handler");

router.get(
  "/:id",
  authenticate,
  endpointHandler(async (req, res) => {
    const comment = await CommentService.getById(req.params.id);
    res.send(comment);
  })
);

router.get("/pins/:pinId", async (req, res) => {
  const comment = await CommentService.getByPinId(req.params.pinId);
  res.send(comment);
});

router.get("/users/:authorId", async (req, res) => {
  const comment = await CommentService.getByAuthorId(req.params.authorId);
  res.send(comment);
});

router.post(
  "/",
  authenticate,
  endpointHandler(async (req, res) => {
    const comment = await CommentService.create({
      ...req.body,
      authorId: req.user.id,
    });
    res.send(comment);
  })
);

router.delete("/:id", authenticate, async (req, res) => {
  await CommentService.removeById(req.params.id);
  res.status(200).end();
});

router.put("/", authenticate, async (req, res) => {
  const comment = await CommentService.updateById({
    ...req.body,
    authorId: req.user.id,
  });
  res.send(comment);
});

module.exports = router;
