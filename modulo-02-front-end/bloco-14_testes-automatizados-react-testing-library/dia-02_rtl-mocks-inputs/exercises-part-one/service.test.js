const service = require('./service.js');


describe('Implementações para a função generateRandomNumber', () => {
  it('Testa a funcionalidade original', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);
    generateRandomNumber();
  
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber()).toBe(10)
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  });

  it('Testa o mock de uma nova funcionalidade de divisão com dois parâmetros', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(service.generateRandomNumber(4,2)).toBe(2);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(4, 2);
  });

  it('Testa o mock de uma nova funcionalidade de multiplicação com três parâmetros', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.generateRandomNumber(10,10,10)).toBe(1000);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 10, 10);
  });

  it('Testa o mock de uma nova funcionalidade que retorna o dobro do número passado como parâmetro', () => {
    service.generateRandomNumber.mockReset();
    service.generateRandomNumber = jest.fn().mockImplementationOnce((n) => n * 2);

    expect(service.generateRandomNumber).toHaveBeenCalledTimes(0);
    expect(service.generateRandomNumber(10)).toBe(20);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10);
  })
})

describe('Implementações para a função returnsUppercase', () => {
  it('Testa o mock de uma nova funcionalidade que retorna a string passada como parâmetro em caixa baixa', () => {
    service.returnsUppercase = jest.fn().mockImplementationOnce((str) => str.toLowerCase());
    
    expect(service.returnsUppercase('Batman')).toBe('batman');
    expect(service.returnsUppercase).toHaveBeenCalled();
    expect(service.returnsUppercase).toHaveBeenCalledTimes(1);
    expect(service.returnsUppercase).toHaveBeenCalledWith('Batman');
  });
})

describe('Implementações para a função returnsFirstLetter', () => {
  it('Testa o mock de uma nova funcionalidade que retorna a última letra da string passada como parâmetro', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(service.generateRandomNumber(4,2)).toBe(2);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(4, 2);
  });
})

describe('Implementações para a função joinsTwoWords', () => {
  // it('Testa o mock de uma nova funcionalidade de divisão com dois parâmetros', () => {
  //   service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
  //   expect(service.generateRandomNumber(4,2)).toBe(2);
  //   expect(service.generateRandomNumber).toHaveBeenCalled();
  //   expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  //   expect(service.generateRandomNumber).toHaveBeenCalledWith(4, 2);
  // });
})