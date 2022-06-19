const {
  encode,
  decode,
} = require('./exercicio-04.js');

describe('The encode function' , () => {
  test('encode is a function' , () => {
    expect(typeof encode).toBe('function');
  });
  test('converts the vowel "a" to the number 1 in the string' , () => {
    const string = 'car';
    expect(encode(string)).toBe('c1r');
  });
  test('converts the vowel "e" to the number 2 in the string' , () => {
    const string = 'leg';
    expect(encode(string)).toBe('l2g');
  });
  test('converts the vowel "i" to the number 3 in the string' , () => {
    const string = 'light';
    expect(encode(string)).toBe('l3ght');
  });
  test('converts the vowel "o" to the number 4 in the string' , () => {
    const string = 'owl';
    expect(encode(string)).toBe('4wl');
  });
  test('converts the vowel "u" to the number 5 in the string' , () => {
    const string = 'luck';
    expect(encode(string)).toBe('l5ck');
  });
  test('does not convert the letter to a number if the letter is a consonant' , () => {
    const string = 'b-c-d-f-g-h-j-k-l-m-n-p-q-r-s-t-v-w-x-y-z'
    expect(encode(string)).toBe('b-c-d-f-g-h-j-k-l-m-n-p-q-r-s-t-v-w-x-y-z');
  });
  test('the output has the same number of characters as the input' , () => {
    const string = 'hello';
    const stringLength = string.length;
    expect((encode(string)).length).toEqual(stringLength);
  });
});

describe('The decode function' , () => {
  test('decode is a function' , () => {
    expect(typeof decode).toBe('function');
  });
  test('converts the number 1 to the vowel "a" in the string' , () => {
    const string = 'c1r';
    expect(decode(string)).toBe('car');
  });
  test('converts the number 2 to the vowel "e" in the string' , () => {
    const string = 'l2g';
    expect(decode(string)).toBe('leg');
  });
  test('converts the number 3 to the vowel "i" in the string' , () => {
    const string = 'l3ght';
    expect(decode(string)).toBe('light');
  });
  test('converts the number 4 to the vowel "o" in the string' , () => {
    const string = '4wl';
    expect(decode(string)).toBe('owl');
  });
  test('converts the number 5 to the vowel "u" in the string' , () => {
    const string = 'l5ck';
    expect(decode(string)).toBe('luck');
  });
  test('does not convert the number to a vowel if the number is 0 or greater than 5' , () => {
    const string = '0 2 6 7 1 8 3 5';
    expect(decode(string)).toBe('0 e 6 7 a 8 i u');
  });
  test('the output has the same number of characters as the input' , () => {
    const string = 'h2ll4';
    const stringLength = string.length;
    expect((decode(string)).length).toEqual(stringLength);
  });
});
