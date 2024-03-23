const { Board } = require("../../../../common/database.js");

function updateById(dto) {
  const {id} = dto;
  return Board.update(dto, {
    where: {
      id,
    },
  });
}

module.exports = updateById;
