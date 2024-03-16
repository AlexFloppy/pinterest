const { Pin } = require("../../../../common/database.js");

function getById(id) {
  return Pin.findByPk(id);
}

module.exports = getById;
