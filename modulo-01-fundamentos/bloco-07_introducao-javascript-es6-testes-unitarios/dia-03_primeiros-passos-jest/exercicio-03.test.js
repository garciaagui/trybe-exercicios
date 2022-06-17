const myFizzBuzz = require('./exercicio-03.js');

describe('The myFizzBuzz function' , () => {

  test('when num is divisible by 3 and 5, returns "fizzbuzz"', () => {
    const num = 15;
    expect (myFizzBuzz(num)).toBe('fizzbuzz');
  });

  test('when num is only divisible by 3, returns "fizz"', () => {
    const num = 3;
    expect (myFizzBuzz(num)).toBe('fizz');
  });

  test('when num is only divisible by 5, returns "buzz"', () => {
    const num = 5;
    expect (myFizzBuzz(num)).toBe('buzz');
  });

  test('when num is not divisible by 3 nor 5, returns num', () => {
    const num = 2;
    expect (myFizzBuzz(num)).toBe(num);
  });

  test('when num is not a number, returns false', () => {
    const num = 'not a number';
    expect (myFizzBuzz(num)).toBeFalsy();
  });

});