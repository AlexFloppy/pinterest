const UserService = require('../../../modules/user/service');

function register(dto) {
  return UserService.create(dto);
}

module.exports = register;