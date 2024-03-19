const { Pin } = require("../../../../common/database.js");

function updateById(dto) {
  const {id} = dto;
  return Pin.update(dto, {
    where: {
      id,
    },
  });
}

module.exports = updateById;
