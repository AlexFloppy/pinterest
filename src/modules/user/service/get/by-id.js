const { User } = require("../../../../common/database.js");

function getById(id) {
  return User.findByPk(id);
}

module.exports = getById;
