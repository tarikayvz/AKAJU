'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WorkOrderStations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // WorkOrderStations -> WorkOrder
      this.belongsTo(models.WorkOrder, {
        foreignKey: 'workOrderID', // 'workOrderID' doğru isimlendirme
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      // WorkOrderStations -> Station
      this.belongsTo(models.Station, {
        foreignKey: 'stationID', // 'stationID' doğru isimlendirme
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  WorkOrderStations.init(
    {
      workOrderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'WorkOrders', // Tablo adı
          key: 'id',
        },
      },
      stationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stations', // Tablo adı
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'WorkOrderStations',
      tableName: 'WorkOrderStations', // Tablo adı
      timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
    }
  );

  return WorkOrderStations;
};
