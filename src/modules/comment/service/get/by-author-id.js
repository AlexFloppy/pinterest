const { Comment } = require("../../../../common/database.js");

function getByAuthorId(authorId) {
  return Comment.findAll({ where: { authorId } });
}

module.exports = getByAuthorId;