const { Comment } = require("../../../../common/database.js");

async function getById(id) {
  const comment = await Comment.findByPk(id);
  if (!comment) {
    throw {
      status: 404,
      message: "Comment not found"
    };
  }
}

module.exports = getById;
