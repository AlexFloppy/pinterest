const { Comment } = require("../../../../common/database.js");

async function create(dto) {
  if (!dto.replyId) {
    return Comment.create(dto);
  }

  const comment = await Comment.findByPk(dto.replyId);
  if (!comment) {
    throw {
      status: 404,
      message: "Parent comment not found"
    }
  }

  dto.depth = comment.depth + 1;

  return Comment.create(dto);
}

module.exports = create;
