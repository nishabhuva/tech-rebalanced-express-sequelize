'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('techrolemodels', [
        {
          firstName: 'Joy',
          lastName: 'Buolamwini',
          description: 'Joy exposes the social implications of articial intelligence through art and research.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
         firstName: 'Arlan',
          lastName: 'Hamilton',
          description: 'Arlan is an advocate for equality in tech and founder of Backstage Capital, which invests in underrepresented founders.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('techrolemodels', null, {});
  }
};
