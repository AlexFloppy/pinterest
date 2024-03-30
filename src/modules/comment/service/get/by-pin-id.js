const { Comment } = require("../../../../common/database.js");

function getByPinId(pinId) {
  return Comment.findAll({ where: { pinId } });
}

module.exports = getByPinId;