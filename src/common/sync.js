const sequelize = require('./database').sequelize;

sequelize.sync({ force: true }) // Change to { alter: true } or { force: true } if needed
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to synchronize database:', error);
  });
