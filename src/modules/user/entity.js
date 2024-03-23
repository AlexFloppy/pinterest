module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // UUID as a primary key for better scalability and performance
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true // Assuming the avatar is a URL to an image
        }
      }
      // You can add more fields here
    }, {
      // Model options
      tableName: 'users', // Use a custom table name rather than Sequelize's default pluralized version
      timestamps: true, // Adds createdAt and updatedAt timestamps
      // You can add more options here
    });
  
    User.associate = function(models) {
      // Define associations here
      User.Pin = User.hasMany(models.Pin, { foreignKey: 'authorId' });
    };

    return User;
  };
  

