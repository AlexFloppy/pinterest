const getById = require("./get/by-id");
const updateById = require("./update/by-id");
const create = require("./create");
const getByUserId = require("./get/by-userId");
const removeById = require("./remove/by-id");

const PinService = {
    getById,
    updateById,
    create,
    getByUserId,
    removeById
};

module.exports = PinService;