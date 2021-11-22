const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((livro) => {
    if (livro.name.length < nameBook.length) {
      nameBook = livro.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());

const expectedResult1 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  const autoresIdade = books.map((livro) => {
    const autores = {idade: livro.releaseYear - livro.author.birthYear, author: livro.author.name};
    return autores;
  });
  return autoresIdade.sort((a, b) => a.idade - b.idade);
}

console.log(nameAndAge());

const expectedResult2 = 43;

function averageAge() {
  // escreva seu código aqui
  const age = nameAndAge().reduce((acc, autor) => {
    acc += autor.idade;
    return acc;
  }, 0);
  return age / nameAndAge().length;
}

console.log(averageAge());


const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, livro) => {
    if(acc.name.length > livro.name.length) return acc;
    return livro;
  });
}

console.log(longestNamedBook());