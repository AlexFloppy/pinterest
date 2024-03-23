const create = require("./create");
const getById = require("./get/by-id");
const getByAuthorId = require("./get/by-author-id");
const updateById = require("./update/by-id");
const removeById = require("./remove/by-id");

const BoardService = {
    create,
    getById,
    getByAuthorId,
    updateById,
    removeById
};

module.exports = BoardService;