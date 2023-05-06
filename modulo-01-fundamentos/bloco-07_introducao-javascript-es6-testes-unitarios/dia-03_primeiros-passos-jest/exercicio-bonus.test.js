const {
  checkIdValidity, 
  checkDetailAvailability,
  searchEmployee } = require('./exercicio-bonus');

describe('The checkIdValidity function' , () => {
  test('checkIdValidity is defined' , () => {
    expect(checkIdValidity).toBeDefined();
  });
  test('checkIdValidity is a function' , () => {
    expect(typeof checkIdValidity).toBe('function');
  });
  test('returns id position in database when id is valid' , () => {
    expect(checkIdValidity('1256-4')).toEqual(3);
    expect(checkIdValidity('4678-2')).toEqual(5);
    expect(checkIdValidity('8579-6')).toEqual(0);
  });
  test('throws an error when id is invalid', () => {
    expect(() => checkIdValidity('XXX')).toThrow(Error);
    expect(() => checkIdValidity(123)).toThrow(Error);
  });
  test('throws the error message "ID não identificada" when id is invalid', () => {
    expect(() => checkIdValidity('XXX')).toThrowError('ID não identificada');
    expect(() => checkIdValidity(123)).toThrowError('ID não identificada');
  });
});

describe('The checkDetailAvailability function' , () => {
  test('checkDetailAvailability is defined' , () => {
    expect(checkDetailAvailability).toBeDefined();
  });
  test('checkDetailAvailability is a function' , () => {
    expect(typeof checkDetailAvailability).toBe('function');
  });
  test('returns true when detail is available' , () => {
    expect(checkDetailAvailability('lastName')).toBeTruthy();
    expect(checkDetailAvailability('firstName')).toBeTruthy();
    expect(checkDetailAvailability('specialities')).toBeTruthy();
  });
  test('throws an error when detail is unavailable', () => {
    expect(() => checkDetailAvailability('YYY')).toThrow(Error);
    expect(() => checkDetailAvailability(456)).toThrow(Error);
  });
  test('throws the error message "Informação indisponível" when detail is unavailable', () => {
    expect(() => checkDetailAvailability('YYY')).toThrowError('Informação indisponível');
    expect(() => checkDetailAvailability(456)).toThrowError('Informação indisponível');
  });
});

describe('The searchEmployee function', () => {
  test('searchEmployee is defined' , () => {
    expect(searchEmployee).toBeDefined();
  });
  test('searchEmployee is a function' , () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('returns employee first name when the id is correct and the detail is "firstName"', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  test('returns employee last name when the id is correct and the detail is "lastName"', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });
  test('returns employee specialities when the id is correct and the detail is "specialities"', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  test('returns an error message when no parameter is passed', () => {
    expect(searchEmployee()).toBe('ID não identificada');
  });
  test('returns an error message when a parameter is invalid', () => {
    expect(searchEmployee('XXX', 'lastName')).toBe('ID não identificada');
    expect(searchEmployee('5569-4', 'XXX')).toBe('Informação indisponível');
    expect(searchEmployee('XXX', 'YYY')).toBe('ID não identificada');
  });
});
