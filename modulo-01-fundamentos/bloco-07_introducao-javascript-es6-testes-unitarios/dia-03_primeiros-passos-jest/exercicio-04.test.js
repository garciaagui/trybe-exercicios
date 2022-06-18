const {
  encode,
  decode,
} = require('./exercicio-04.js');

describe('The encode function' , () => {
  test('encode is a function' , () => {
    expect(typeof encode).toBe('function');
  });
  test('converts vowel "a" to number 1 in the phrase' , () => {
    const phrase = 'How are you today?';
    expect(encode(phrase)).toBe('H4w 1r2 y45 t4d1y?');
  });
  test('converts vowel "e" to number 2 in the phrase' , () => {
    const phrase = 'How are you today?';
    expect(encode(phrase)).toBe('H4w 1r2 y45 t4d1y?');
  });
  test('converts vowel "i" to number 3 in the phrase' , () => {
    const phrase = 'hi there!';
    expect(encode(phrase)).toBe('h3 th2r2!');
  });
  test('converts vowel "o" to number 4 in the phrase' , () => {
    const phrase = 'hello';
    expect(encode(phrase)).toBe('h2ll4');
  });
  test('converts vowel "u" to number 5 in the phrase' , () => {
    const phrase = 'How are you today?';
    expect(encode(phrase)).toBe('H4w 1r2 y45 t4d1y?');
  });
  test('does not convert the letter to a number if the letter is a consonant' , () => {
    const phrase = 'b - c - d - f - g - h - j - k - l - m - n - p - q - r - s - t - v - w - x - y - z'
    expect(encode(phrase)).toBe('b - c - d - f - g - h - j - k - l - m - n - p - q - r - s - t - v - w - x - y - z');
  });
  test('the output has the same number of characters as the input' , () => {
    const phrase = 'hello'
    const phraseLength = phrase.length;
    expect((encode(phrase)).length).toEqual(phraseLength);
  });
});

describe('The decode function' , () => {
  test('decode is a function' , () => {
    expect(typeof decode).toBe('function');
  });
  test('converts number 1 to vowel "a" in the phrase' , () => {
    const phrase = 'H4w 1r2 y45 t4d1y?';
    expect(decode(phrase)).toBe('How are you today?');
  });
  test('converts number 2 to vowel "e" in the phrase' , () => {
    const phrase = 'H4w 1r2 y45 t4d1y?';
    expect(decode(phrase)).toBe('How are you today?');
  });
  test('converts number 3 to vowel "i" in the phrase' , () => {
    const phrase = 'h3 th2r2!';
    expect(decode(phrase)).toBe('hi there!');
  });
  test('converts number 4 to vowel "o" in the phrase' , () => {
    const phrase = 'h2ll4';
    expect(decode(phrase)).toBe('hello');
  });
  test('converts number 5 to vowel "u" in the phrase' , () => {
    const phrase = 'H4w 1r2 y45 t4d1y?';
    expect(decode(phrase)).toBe('How are you today?');
  });
  test('does not convert the number to a vowel if the number is 0 or greater than 5' , () => {
    const phrase = '0 2 6 7 1 8 3 5';
    expect(decode(phrase)).toBe('0 e 6 7 a 8 i u');
  });
  test('the output has the same number of characters as the input' , () => {
    const phrase = 'h2ll4'
    const phraseLength = phrase.length;
    expect((decode(phrase)).length).toEqual(phraseLength);
  });
});
