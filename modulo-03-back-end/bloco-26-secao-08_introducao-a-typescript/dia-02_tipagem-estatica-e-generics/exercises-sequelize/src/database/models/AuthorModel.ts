import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Authors extends Model {
  declare id: number;
  declare name: string;
}

Authors.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(100),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

export default Authors;