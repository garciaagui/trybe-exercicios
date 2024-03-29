"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Genres extends sequelize_1.Model {
}
Genres.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    genre: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'genres',
    timestamps: false,
});
exports.default = Genres;
