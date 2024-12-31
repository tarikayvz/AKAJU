const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class StationDataEntry extends Model {
    /**
     * Yardımcı metodlar: İlişkileri tanımlamak için kullanılır.
     * Sequelize yaşam döngüsünün bir parçası değildir.
     */
    static associate(models) {
      StationDataEntry.belongsTo(models.StationsInputOutput, {
        foreignKey: 'stationsInputOutputID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      StationDataEntry.belongsTo(models.User, {
        foreignKey: 'userID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  StationDataEntry.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      stationsInputOutputID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
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
      modelName: 'StationDataEntry',
      tableName: 'StationDataEntries',
      timestamps: true, // createdAt ve updatedAt için gerekli
    }
  );

  return StationDataEntry;
};
