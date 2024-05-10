const { Pin } = require("../../../../common/database.js");

function create(dto) {
  delete dto.id;
  return Pin.create(dto);
}

module.exports = create;
