'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
        street: '711-2880 Nulla St',
        city: 96522,
        zip_code: 'Mississippi'
      }, {
        street: '8562 Fusce Rd',
        city: 20345,
        zip_code: 'Nebraska'
      },
      {
        street: '606-3727 Ullamcorper Street',
        city: 11523,
        zip_code: 'Roseville'
      },
      {
        street: '867-859 Sit Rd',
        city: 39531,
        zip_code: 'New York'
      },
      {
        street: '7292 Dictum Av',
        city: 47096,
        zip_code: 'San Antonio'
      },
      {
        street: '651-8679 Sodales Av',
        city: 19855,
        zip_code: 'Tamuning'
      },
      {
        street: '191-103 Integer Rd',
        city: 08219,
        zip_code: 'Corona New Mexico'
      },
      {
        street: '2508 Dolor. Av',
        city: 12482,
        zip_code: 'Muskegon KY'
      },
      {
        street: '666-4366 Lacinia Avenue',
        city: 19253,
        zip_code: 'Ohio'
      },
      {
        street: 'Lacinia Road',
        city: 09289,
        zip_code: 'San Bernardino'
      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
