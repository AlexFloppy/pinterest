const { Pin } = require("../../../../common/database.js");

function updateById(id, params) {
  return Pin.update(params, {
    where: {
      id,
    },
  });
}

module.exports = updateById;
