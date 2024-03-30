const { Comment } = require("../../../../common/database.js");

function removeById(id) {
  return Comment.destroy({
    where: {
      id,
    },
  });
}

module.exports = removeById;
