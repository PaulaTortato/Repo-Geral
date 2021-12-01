// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./script.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const error = new Error('Não temos esse pokémon para você :(');
    function callback(erro, msg) {
      try {
        expect(erro).toEqual(error);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails((e) => e.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const msgCerta = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
    function callback(erro, msg) {
      try {
        expect(msg).toBe(msgCerta);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails((e) => e.name === 'Squirtle', callback);
  });
});

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe(`Testa a função uppercase`, () => {
  it(`Verifica a chamada do callback da função`, (done) => {
    uppercase(`Hips don't lie`, (resultado) => {
      try {
        expect(resultado).toBe(`HIPS DON'T LIE`);
        done();
      } catch (erro) {
        done(erro);
      }
    })
  });
});