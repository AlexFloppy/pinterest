module.exports = (sequelize, DataTypes) => {
    const Pin = sequelize.define('Pin', {
      // UUID as a primary key for better scalability and performance
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },      
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // You can add more fields here
    }, {
      // Model options
      tableName: 'pins', // Use a custom table name rather than Sequelize's default pluralized version
      timestamps: true, // Adds createdAt and updatedAt timestamps
      // You can add more options here
    });
  
    Pin.associate = function(models) {
      // Define associations here
      // Example: User.hasMany(models.Post, { foreignKey: 'userId' });
      Pin.User = Pin.belongsTo(models.User, { foreignKey: 'authorId'});
    };
  
    return Pin;
  };
  

