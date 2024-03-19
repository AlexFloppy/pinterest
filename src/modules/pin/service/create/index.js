const { Pin } = require("../../../../common/database.js");

function create(dto) {
  return Pin.create(dto);
}

module.exports = create;
