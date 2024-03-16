const UserService = require('../../../modules/user/service');
const jwt = require('jsonwebtoken');


async function login(dto) {
    const user = await UserService.getByEmail(dto.email);

console.log( process.env);

    if (!user || dto.password !== user.password) {
        throw new Error('Invalid credentials');
    }

    return {
        accessToken: jwt.sign(user.dataValues, process.env.JWT_SECRET)
    };
}

module.exports = login;