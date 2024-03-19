const { Pin } = require("../../../../common/database.js");

function removeById(id) {
  return Pin.destroy({
    where: {
      id,
    },
  });
}

module.exports = removeById;
