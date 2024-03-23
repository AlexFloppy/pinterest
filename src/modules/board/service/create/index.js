const { Board } = require("../../../../common/database.js");

function create(dto) {
  return Board.create(dto);
}

module.exports = create;
