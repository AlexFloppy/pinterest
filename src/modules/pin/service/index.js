const getById = require("./get/by-id");
const getByAuthorId = require("./get/by-author-id");
const updateById = require("./update/by-id");
const create = require("./create");
const removeById = require("./remove/by-id");

const PinService = {
    getById,
    updateById,
    create,
    getByAuthorId,
    removeById
};

module.exports = PinService;