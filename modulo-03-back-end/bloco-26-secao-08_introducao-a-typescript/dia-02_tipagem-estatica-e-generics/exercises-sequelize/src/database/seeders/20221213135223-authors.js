module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'authors',
      [
        {
          name: 'Neil Gaiman',
        },
        {
          name: 'Alan Moore',
        },
        {
          name: 'Stan Lee',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors', null, {});
  },
};