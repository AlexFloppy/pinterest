const { Board } = require("../../../../common/database.js");

function getByAuthorId(authorId) {
  return Board.findAll({ where: { authorId } });
}

module.exports = getByAuthorId;