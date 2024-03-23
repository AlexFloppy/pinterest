const { Board } = require("../../../../common/database.js");

function removeById(id) {
  return Board.destroy({
    where: {
      id,
    },
  });
}

module.exports = removeById;
