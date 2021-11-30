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