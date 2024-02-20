const { User } = require("../../../../common/database.js");

function getByEmail(email) {
  return User.findOne({ where: { email } });
}

module.exports = getByEmail;