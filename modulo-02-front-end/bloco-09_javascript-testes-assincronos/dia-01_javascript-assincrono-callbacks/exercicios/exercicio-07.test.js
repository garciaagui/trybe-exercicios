const uppercase = require('./exercicio-07');

test('Verifica se a função uppercase transforma as letras da string passada em letras maiúsculas', (done) => {
  uppercase('batman', (result) => {
    try {
      expect(result).toBe('BATMAN');
      done();
    } catch (error) {
      done(error);
    }
  });
});
