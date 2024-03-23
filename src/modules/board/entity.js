module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
      // UUID as a primary key for better scalability and performance
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      }, 
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },     
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // You can add more fields here
    }, {
      // Model options
      tableName: 'boards', // Use a custom table name rather than Sequelize's default pluralized version
      timestamps: true, // Adds createdAt and updatedAt timestamps
      // You can add more options here
    });
  
    Board.associate = function(models) {
      // Define associations here
      // Example: User.hasMany(models.Post, { foreignKey: 'userId' });
      Board.User = Board.belongsTo(models.User, { foreignKey: 'authorId'});  
    };
  
    return Board;
  };
  

