import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Authors from './AuthorModel';
import Genres from './GenreModel';

class Books extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Books.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(100),
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    },
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id',
    },
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

// Authors.hasMany(Books);
// Genres.hasMany(Books);
Authors.hasMany(Books, { foreignKey: 'authorId' });
Genres.hasMany(Books, { foreignKey: 'genreId' });

// Books.belongsTo(Authors);
// Books.belongsTo(Genres);
Books.belongsTo(Authors, { foreignKey: 'id' });
Books.belongsTo(Genres, { foreignKey: 'id' });

export default Books;