const { Board } = require("../../../../common/database.js");

function getById(id) {
  return Board.findByPk(id);
}

module.exports = getById;
