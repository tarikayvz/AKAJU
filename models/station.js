const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Station extends Model {
    /**
     * Yardımcı metodlar: İlişkileri tanımlamak için kullanılır.
     * Sequelize yaşam döngüsünün bir parçası değildir.
     */
    static associate(models) {
      Station.belongsTo(models.User, {
        foreignKey: 'userID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Station.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userID: {
        type: DataTypes.INTEGER,
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
      modelName: 'Station',
      tableName: 'Stations',
      timestamps: true, // createdAt ve updatedAt için gerekli
    }
  );

  return Station;
};
