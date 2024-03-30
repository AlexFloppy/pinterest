const getById = require("./get/by-id");
const getByAuthorId = require("./get/by-author-id");
const getByPinId = require("./get/by-pin-id");
const updateById = require("./update/by-id");
const create = require("./create");
const removeById = require("./remove/by-id");

const CommentService = {
    getById,
    updateById,
    create,
    getByAuthorId,
    getByPinId,
    removeById
};

module.exports = CommentService;