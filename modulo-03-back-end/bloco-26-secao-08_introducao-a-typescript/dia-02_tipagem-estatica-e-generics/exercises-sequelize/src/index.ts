import Author from './database/models/AuthorModel';
import Genres from './database/models/GenreModel';
import Books from './database/models/BookModel';
import sequelize from 'sequelize';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Books,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [['totalBooks', 'DESC']],
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();