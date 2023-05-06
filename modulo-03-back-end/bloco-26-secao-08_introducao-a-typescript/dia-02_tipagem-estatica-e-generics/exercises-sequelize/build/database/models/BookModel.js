"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const AuthorModel_1 = __importDefault(require("./AuthorModel"));
const GenreModel_1 = __importDefault(require("./GenreModel"));
class Books extends sequelize_1.Model {
}
Books.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'id',
        },
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id',
        },
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
// Authors.hasMany(Books);
// Genres.hasMany(Books);
AuthorModel_1.default.hasMany(Books, { foreignKey: 'authorId' });
GenreModel_1.default.hasMany(Books, { foreignKey: 'genreId' });
// Books.belongsTo(Authors);
// Books.belongsTo(Genres);
Books.belongsTo(AuthorModel_1.default, { foreignKey: 'id' });
Books.belongsTo(GenreModel_1.default, { foreignKey: 'id' });
exports.default = Books;
