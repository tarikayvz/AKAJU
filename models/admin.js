'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Eğer Admin ile başka tablolar arasında ilişki varsa, burada tanımlayın.
      // Örneğin, Admin ile Notifications arasında ilişki varsa:
      // this.hasMany(models.Notification, { foreignKey: 'adminID', as: 'notifications' });
    }
  }
  Admin.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      accessToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Admin',
      tableName: 'Admins',
      timestamps: true, // createdAt ve updatedAt alanlarını otomatik olarak yönetir
    }
  );
  return Admin;
};
