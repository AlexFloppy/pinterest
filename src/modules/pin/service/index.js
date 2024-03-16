const getById = require("./get/by-id");
const updateById = require("./update/by-id");
const create = require("./create");
const getByUserId = require("./get/by-userId");

const PinService = {
    getById,
    updateById,
    create,
    getByUserId,
};

module.exports = PinService;