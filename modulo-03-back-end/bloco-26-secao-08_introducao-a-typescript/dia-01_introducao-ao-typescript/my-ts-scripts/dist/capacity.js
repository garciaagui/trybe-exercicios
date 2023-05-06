"use strict";
// Exercício 04
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, baseUnit, convertUnit) {
    const expoent = (units.indexOf(convertUnit)) - (units.indexOf(baseUnit));
    return value * (10 ** expoent);
}
exports.convert = convert;
function exec() {
    const valueToConvert = readline_sync_1.default
        .questionFloat('Insira um valor a ser convertido: ');
    const fromUnit = readline_sync_1.default
        .keyInSelect(units, 'Das unidades de medida disponíveis, qual é a unidade desse valor? ');
    const toUnit = readline_sync_1.default
        .keyInSelect(units, 'Das unidades de medida disponíveis, deseja que o valor seja convertido para qual delas? ');
    const baseUnit = units[fromUnit];
    const convertUnit = units[toUnit];
    if (!baseUnit || !convertUnit) {
        console.log('Operação cancelada.');
        return null;
    }
    const valueConverted = convert(valueToConvert, baseUnit, convertUnit);
    console.log(`${valueToConvert}${baseUnit} é igual a ${valueConverted}${convertUnit}`);
}
exports.exec = exec;
exec();
