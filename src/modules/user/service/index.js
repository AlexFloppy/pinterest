const getById = require("./get/by-id");
const updateById = require("./update/by-id");
const create = require("./create");

const UserService = {
    getById,
    updateById,
    create
};

module.exports = UserService;