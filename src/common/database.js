const Sequelize = require('sequelize');
const sequelize = require('./orm');

const db = {};

// Import models from each module
db.User = require('../modules/user/entity.js')(sequelize, Sequelize.DataTypes);
// ... import other models

// Set up associations if models have any
db.User.associate(db);
// ... call associate on other models

// Export the db object which contains all models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;