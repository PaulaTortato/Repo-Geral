const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const dados = (nomeCompleto) => {
  const email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
  return {nomeCompleto, email};
}

console.log(newEmployees(dados));

const sorteio = (aposta, callback) => {
  let num = Math.trunc(Math.random() * 5);
  return `Aposta: ${aposta}
Número soretado: ${num}
${callback(aposta, num)}`;
}

const check = (aposta, num) => {
  if (aposta === num) {
    return 'Parabéns, você ganhou!';
  }
  return 'Tente novamente.';
}

console.log(sorteio(2, check));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostas = (gabarito, respostasEstudante, callback) => {
  return callback(gabarito, respostasEstudante);
}

const checkRespostas = (gabarito, respostasEstudante) => {
  let count = 0;
  let points = 0;
  let wrong = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostasEstudante[i]) {
      count += 1;
      points += 1;
    } else if (gabarito[i] === 'N.A') {
      count = count;
      points = points
    } else {
      wrong += 1;
      points -= 0.5;
    }
  }
  return `Respostas certas: ${count}, Respostas erradas: ${wrong}, Pontuação final: ${points}`;
}

console.log(respostas(RIGHT_ANSWERS, STUDENT_ANSWERS, checkRespostas));