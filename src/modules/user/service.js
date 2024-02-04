const db = require("../../common/database.js");

function getList() {
  return db.User.findAll();
}

function create() {
  return db.User.create({
    name: "Ivan",
    email: "ivan3@example.com",
    password: "Ivan",
  });
}

module.exports = { getList, create };
