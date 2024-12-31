const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here if needed
    }
  }

  Stock.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      itemName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      currentQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      requiredQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(50),
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
      modelName: 'Stock',
      tableName: 'Stocks',
      timestamps: true, // Ensures Sequelize manages createdAt and updatedAt
    }
  );

  return Stock;
};
