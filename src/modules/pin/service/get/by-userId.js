const { Pin } = require("../../../../common/database.js");

function getByUserId(UserId) {
  return Pin.findOne({ where: { UserId } });
}

module.exports = getByUserId;