const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SavedSchema extends Model {
    /**
     * Yardımcı metodlar: İlişkileri tanımlamak için kullanılır.
     * Sequelize yaşam döngüsünün bir parçası değildir.
     */
    static associate(models) {
      SavedSchema.belongsToMany(models.StationsInputOutput, {
        through: 'SavedSchemaStations', // Ara tablo kullanılabilir
        foreignKey: 'savedSchemaID',
        otherKey: 'stationsInputOutputID',
      });
    }
  }

  SavedSchema.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //  stationsInputOutputIDs: {
      //    type: DataTypes.ARRAY(DataTypes.INTEGER), // PostgreSQL için geçerli
      //    allowNull: true,
      // },
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
      modelName: 'SavedSchema',
      tableName: 'SavedSchemas',
      timestamps: true, // createdAt ve updatedAt için gerekli
    }
  );

  return SavedSchema;
};
