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
    const mockUpperCase = jest
      .spyOn(service, 'returnsUppercase')
        .mockImplementationOnce((str) => str.toLowerCase());

    expect(mockUpperCase('bAtmAn')).toBe('batman');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenCalledWith('bAtmAn');

    service.returnsUppercase.mockRestore();
    expect(service.returnsUppercase('bAtmAn')).toBe('BATMAN');
  });
})

describe('Implementações para a função returnsFirstLetter', () => {
  it('Testa o mock de uma nova funcionalidade que retorna a string passada como parâmetro em caixa baixa', () => {
    const mockFirstLetter = jest
      .spyOn(service, 'returnsFirstLetter')
        .mockImplementationOnce((str) => str[str.length - 1]);
    
    expect(mockFirstLetter('Wolverine')).toBe('e');
    expect(mockFirstLetter).toHaveBeenCalled();
    expect(mockFirstLetter).toHaveBeenCalledTimes(1);
    expect(mockFirstLetter).toHaveBeenCalledWith('Wolverine');

    service.returnsFirstLetter.mockRestore();
    expect(service.returnsFirstLetter('Wolverine')).toBe('W');
  });
})

describe('Implementações para a função joinsTwoWords', () => {
  it('Testa o mock de uma nova funcionalidade que concatena três strings', () => {
    const mockJoinsTwoWords = jest
      .spyOn(service, 'joinsTwoWords')
        .mockImplementationOnce((firstStr, secondStr, thirdStr) => firstStr+secondStr+thirdStr);
    
    expect(mockJoinsTwoWords('Game','Of','Thrones')).toBe('GameOfThrones');
    expect(mockJoinsTwoWords).toHaveBeenCalled();
    expect(mockJoinsTwoWords).toHaveBeenCalledTimes(1);
    expect(mockJoinsTwoWords).toHaveBeenCalledWith('Game','Of','Thrones');

    service.joinsTwoWords.mockRestore();
    expect(service.joinsTwoWords('Game', 'Of')).toBe('GameOf');
  });
})

describe ('Implementações para a função fetchDogImage', () => {
  service.fetchDogImage = jest.fn();
  afterEach(service.fetchDogImage.mockReset);

  it('Testa o retorno quando a requisição da API é bem sucedida', async () => {
    service.fetchDogImage.mockResolvedValue('request success');

    service.fetchDogImage();
    expect(service.fetchDogImage).toHaveBeenCalled();
    expect(service.fetchDogImage).toHaveBeenCalledTimes(1);
    await expect(service.fetchDogImage()).resolves.toBe("request success");
    expect(service.fetchDogImage).toHaveBeenCalledTimes(2);
  })

  it('Testa o retorno quando a requisição da API falha', async () => {
    service.fetchDogImage.mockRejectedValue("request failed");

    expect(service.fetchDogImage).toHaveBeenCalledTimes(0);
    await expect(service.fetchDogImage()).rejects.toMatch("request failed");
    expect(service.fetchDogImage).toHaveBeenCalledTimes(1);
  });
})
