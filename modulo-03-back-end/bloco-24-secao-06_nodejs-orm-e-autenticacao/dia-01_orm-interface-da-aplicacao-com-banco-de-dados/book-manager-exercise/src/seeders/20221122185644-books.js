'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Fire and Blood',
        author: 'George R.R. Martin',
        pageQuantity: 736,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'HarperVoyager',
      },
      {
        title: 'The Silmarillion',
        author: 'J. R. R. Tolkien',
        pageQuantity: 416,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'Houghton Mifflin',
      },
      {
        title: 'Watchmen',
        author: 'Alan Moore',
        pageQuantity: 448,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'DC Comics',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};