const { User } = require("../../../../common/database.js");

function updateById(id, params) {
  return User.update(params, {
    where: {
      id,
    },
  });
}

module.exports = updateById;
