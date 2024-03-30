const UserService = require('../../../modules/user/service');
const jwt = require('jsonwebtoken');

async function login(dto) {
    const user = await UserService.getByEmail(dto.email);

    if (!user || dto.password !== user.password) {
        throw  {
            status: 400,
            message: "Invalid credentials"
        }
    }

    return {
        accessToken: jwt.sign(user.dataValues, process.env.JWT_SECRET)
    };
}

module.exports = login;