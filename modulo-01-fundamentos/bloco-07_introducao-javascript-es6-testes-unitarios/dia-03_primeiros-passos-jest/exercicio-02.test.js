const myRemove = require('./exercicio-02.js');

describe('The myRemove function', () => {
  
  test('returns the array [1, 2, 3, 4] without the item 3', () => {
    const array = [1,2,3,4];
    const item = 3;
    expect(myRemove(array, item)).toEqual([1,2,4]);
  });

  test('does not return the array [1, 2, 3, 4] with the item 3', () => {
    const array = [1,2,3,4];
    const item = 3;
    expect(myRemove(array, item)).not.toEqual([1,2,3,4]);
  });

  test('returns the array [1, 2, 3, 4] with all its values when the item is 5', () => {
    const array = [1,2,3,4];
    const item = 5;
    expect(myRemove(array, item)).toEqual([1,2,3,4]);
  });

});