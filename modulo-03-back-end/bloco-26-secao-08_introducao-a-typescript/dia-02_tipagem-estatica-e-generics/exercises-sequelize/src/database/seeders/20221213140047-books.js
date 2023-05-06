module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'The Amazing Spider-Man',
          author_id: 3,
          genre_id: 1,
        },
        {
          title: 'Watchmen',
          author_id: 2,
          genre_id: 3,
        },
        {
          title: 'The Sandman',
          author_id: 1,
          genre_id: 2,
        },
        {
          title: 'V for Vendetta',
          author_id: 2,
          genre_id: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};