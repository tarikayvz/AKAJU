const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Notification extends Model {
    /**
     * Yardımcı metodlar: İlişkileri tanımlamak için kullanılır.
     * Sequelize yaşam döngüsünün bir parçası değildir.
     */
    static associate(models) {
      Notification.belongsTo(models.User, {
        foreignKey: 'userID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Notification.belongsTo(models.Admin, {
        foreignKey: 'adminID',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
    }
  }

  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adminID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Notification',
      tableName: 'Notifications',
      timestamps: true, // createdAt ve updatedAt için gerekli
    }
  );

  return Notification;
};
