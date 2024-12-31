'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StatsInpOut', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workOrderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'WorkOrders', 
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      stationID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stations', // Related table
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      inputProducts: {
        type: Sequelize.TEXT, // Store JSON or string
        allowNull: true
      },
      outputProducts: {
        type: Sequelize.TEXT, // Store JSON or string
        allowNull: true
      },
      toStationInputOutputID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'StatsInpOut', 
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StatsInpOut');
  }
};
