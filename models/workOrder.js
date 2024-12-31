'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WorkOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // WorkOrder ile Station arasında belongsToMany ilişkisi
      this.belongsToMany(models.Station, {
        through: 'WorkOrderStations', // Ara tablo adı
        foreignKey: 'workOrderID', // WorkOrder'dan WorkOrderStations'a bağlanacak foreignKey
        otherKey: 'stationID', // Station'dan WorkOrderStations'a bağlanacak foreignKey
        as: 'stations', // İlişkiyi adlandırma (opsiyonel)
      });
    }
  }
  WorkOrder.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'WorkOrder',
      tableName: 'WorkOrders',
      timestamps: true, // createdAt ve updatedAt otomatik olarak eklenir
    }
  );
  return WorkOrder;
};
