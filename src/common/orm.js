const Sequelize = require('sequelize');
const sequelize = new Sequelize('pinterest', 'pinterest_admin', 'password', {
  host: 'localhost',
  dialect: 'postgres'
})

// Function to check the connection
const checkConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };

module.exports = sequelize;
