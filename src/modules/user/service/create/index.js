const { User } = require("../../../../common/database.js");

function create(dto) {
  return User.create(dto);
}

module.exports = create;