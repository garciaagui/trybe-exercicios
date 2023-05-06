import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Genres extends Model {
  declare id: number;
  declare genre: string;
}

Genres.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  genre: {
    type: STRING(100),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'genres',
  timestamps: false,
});

export default Genres;