const sum = require('./exercicio-01.js');

describe('The sum function', () => {
  
  test('returns 9 when sum(4,5)', () => {
    expect(sum(4,5)).toEqual(9);
  })

  test('returns 0 when sum(0,0)', () => {
    expect(sum(0,0)).toEqual(0);
  })

  test('throws an error when a string is as a parameter', () => {
    expect(() => sum(4,'5')).toThrow(Error);
  })

  test('throws the error message "parameters must be numbers" when a string is as a parameter', () => {
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
  
})