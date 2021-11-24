const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, valor) => {
    for (let i = 0; i < valor.length; i++) {
      acc.push(valor[i]);
    }
    return acc;
  }, []);
}

console.log(flatten());

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, nome) => {
    for (let i = 0; i < nome.length; i++) {
      if (nome[i].toLowerCase() === "a") {
        acc += 1;
      } else {
        continue;
      }
    }
    return acc;
  }, 0);
}

console.log(containsA());

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  const alunos = students.map((value, i) => {
    return { name: value, average: grades[i] };
  });
  for (let i = 0; i < alunos.length; i++) {
    const nota =
      alunos[i].average.reduce((acc, nota) => (acc += nota)) /
      alunos[i].average.length;
    alunos[i].average = nota;
  }
  return alunos;
}

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];

console.log(studentAverage());

// escreva greet abaixo
const greet = (name, greeting = "Hi") => `${greeting} ${name}`;

console.log(greet("John")); // 'Hi John'
console.log(greet("John", "Good morning")); // 'Good morning John'
console.log(greet("Isabela", "Oi")); // 'Oi Isabela'
