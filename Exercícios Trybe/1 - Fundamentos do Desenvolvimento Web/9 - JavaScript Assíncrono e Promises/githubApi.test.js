// githubApi.test.js
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
describe('Testa a função getRepos', () => {
  test(`verifique que os repositórios 'sd-03-block5-project-todo-list-tests' e 'sd-04-block5-project-color-guess-tests' se encontram nessa lista`, async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContain('sd-03-block5-project-todo-list-tests');
    expect(result).toContain('sd-04-block5-project-color-guess-tests');
  });
})

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});