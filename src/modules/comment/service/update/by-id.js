const { Comment } = require("../../../../common/database.js");

function updateById(dto) {
  const {id, authorId} = dto;
  return Comment.update(dto, {
    where: {
      id, authorId
    },
  });
}

module.exports = updateById;
