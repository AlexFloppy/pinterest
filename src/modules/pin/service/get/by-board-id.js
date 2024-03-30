const { Pin } = require("../../../../common/database.js");

function getByBoardId(boardId) {
  return Pin.findAll({ where: { boardId } });
}

module.exports = getByBoardId;