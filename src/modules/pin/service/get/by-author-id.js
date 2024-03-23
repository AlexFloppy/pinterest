const { Pin } = require("../../../../common/database.js");

function getByAuthorId(authorId) {
  return Pin.findAll({ where: { authorId } });
}

module.exports = getByAuthorId;