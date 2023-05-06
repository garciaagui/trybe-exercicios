module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          genre: 'Action',
        },
        {
          genre: 'Dark Fantasy',
        },
        {
          genre: 'Neo-noir',
        },
        {
          genre: 'Dystopian Fiction',
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('genres', null, {});
  },
};