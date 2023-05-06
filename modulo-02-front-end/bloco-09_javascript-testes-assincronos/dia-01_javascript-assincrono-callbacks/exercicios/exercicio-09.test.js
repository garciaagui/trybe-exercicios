const getPokemonDetails = require('./exercicio-09');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const filter  = (pokemon) => pokemon.name === 'Pikachu';
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(filter, (error, message) => {
      try {
        expect(message).toBeNull();
        expect(error).toEqual(expectedError);
        done();
      }
      catch (error) {
        done(error);
      }
    })
  });
  
  it("retorna um pokemon que existe no banco de dados", (done) => {
    const filter  = (pokemon) => pokemon.name === 'Charmander';
    getPokemonDetails(filter, (error, message) => {
      try {
        expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        expect(error).toBeNull();
        done();
      }
      catch (error) {
        done(error);
      }
    })
  });
});
