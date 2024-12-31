const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class StationsInputOutput extends Model {
    /**
     * Yardımcı metodlar: İlişkileri tanımlamak için kullanılır.
     * Sequelize yaşam döngüsünün bir parçası değildir.
     */
    static associate(models) {
      // WorkOrder ile ilişki
      StationsInputOutput.belongsTo(models.WorkOrder, {
        foreignKey: 'workOrderID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      // Station ile ilişki
      StationsInputOutput.belongsTo(models.Station, {
        foreignKey: 'stationID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      // StationsInputOutput ile ilişki (self-reference)
      StationsInputOutput.belongsTo(models.StationsInputOutput, {
        foreignKey: 'toStationInputOutputID',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });

      // StationsInputOutput ile ilişki (self-reference, hasMany)
      StationsInputOutput.hasMany(models.StationsInputOutput, {
        foreignKey: 'toStationInputOutputID',
      });
    }
  }

  // StationsInputOutput modelini tanımlama
  StationsInputOutput.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      workOrderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inputProducts: {
        type: DataTypes.TEXT, // JSON veya string olarak saklanabilir
        allowNull: true,
      },
      outputProducts: {
        type: DataTypes.TEXT, // JSON veya string olarak saklanabilir
        allowNull: true,
      },
      toStationInputOutputID: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      modelName: 'StationsInputOutput',
      tableName: 'StationsInputOutputs',
      timestamps: true, // createdAt ve updatedAt için gerekli
    }
  );

  return StationsInputOutput;
};
