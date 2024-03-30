module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      depth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Корневые комментарии имеют глубину 0
      },
      // Добавьте остальные поля
    },
    {
      tableName: "comments",
      timestamps: true,
    }
  );

  Comment.associate = function (models) {
    Comment.User = Comment.belongsTo(models.User, { foreignKey: "authorId" });
    Comment.Pin = Comment.belongsTo(models.Pin, { foreignKey: "pinId" });
    // Обратите внимание на self-association для поддержки иерархии
    Comment.ParentComment = Comment.belongsTo(models.Comment, {
      as: "Parent",
      foreignKey: "replyId",
    });
    Comment.ChildComments = Comment.hasMany(models.Comment, {
      as: "Replies",
      foreignKey: "replyId",
    });
  };

  return Comment;
};
