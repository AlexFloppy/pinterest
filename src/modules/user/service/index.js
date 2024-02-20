const getById = require("./get/by-id");
const updateById = require("./update/by-id");
const create = require("./create");
const getByEmail = require("./get/by-email");

const UserService = {
    getById,
    updateById,
    create,
    getByEmail,
};

module.exports = UserService;