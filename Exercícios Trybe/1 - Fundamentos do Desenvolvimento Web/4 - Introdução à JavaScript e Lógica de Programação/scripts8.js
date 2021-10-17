function verificaPalindrome (word) {
  let palindrome = '';
  for (let i = word.length-1; i >= 0; i--) {
    palindrome = palindrome + word[i];
  }
  if (palindrome == word) {
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));

function indexHigherNumber (numbers) {
  let maiorNumero = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
  else {
    maiorNumero = maiorNumero;
  }
}
return numbers.indexOf(maiorNumero);
}

console.log(indexHigherNumber([2, 3, 6, 7, 10, 1]));

function indexLowerNumber (numbers) {
  let maiorNumero = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
  else {
    maiorNumero = maiorNumero;
  }
}

  let menorNumero = maiorNumero;

for (let idx = 0; idx < numbers.length; idx++) {
  if (numbers[idx] < menorNumero) {
    menorNumero = numbers[idx];
  }
  else {
    menorNumero = menorNumero;
  }
}
  return numbers.indexOf(menorNumero);
}

console.log(indexLowerNumber([2, 4, 6, 7, 10, 0, -3]));

function biggerName (names) {
  let bigger = '';
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > bigger.length) {
      bigger = names[i];
    }
    else {
      bigger = bigger;
    }
  }
  return bigger;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function mostFrequent (numbers) {
  let frequentNum = 0;
  let counter = 0;
  let highestCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let n = 0; n < numbers.length; n++) {
      if (numbers[i] == numbers[n]) {
        counter++;
      }
      else {
        counter = counter;
      }
    }
    if (counter > highestCount) {
      frequentNum = numbers[i];
      highestCount = counter;
    }
    else {
      frequentNum = frequentNum;
      highestCount = highestCount;
    }
    counter = 0;
  }
  return frequentNum;
}

console.log(mostFrequent([2, 3, 2, 5, 8, 2, 3, 8, 7, 6, 8, 4, 5, 8, 8, 1, 8]));

function sum (number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total = total + i;
  }
  return total;
}

console.log(sum(10));

function verificaFimPalavra (firstWord, secondWord) {
  let igual = false;
  for (let n = firstWord.length-1; n >= firstWord.length-secondWord.length; n--) {
    for (let i = secondWord.length-1; i >= 0; i--) {
      if (firstWord[n] == secondWord[i]) {
        igual = true;
      }
      else {
        igual = false;
      }
    }
  }
  return igual;
}

console.log(verificaFimPalavra('trybe', 'be'));

function evenNumbers (vector) {
  let evenNumbersArr = [];
  for (let i = 0; i < vector.length; i++) {
    // Referência para arrays dentro de arrays: https://www.elated.com/nested-arrays-in-javascript/
    for (let n = 0; n < vector[i].length; n++) {
      if (vector[i][n] % 2 == 0) {
        evenNumbersArr.push(vector[i][n]);
      }
      else {
        evenNumbersArr = evenNumbersArr;
      }
    }
  }
  return evenNumbersArr;
}

console.log(evenNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

let frutas = {};

function cestaDeFrutas (fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] in frutas) {
      frutas[fruits[i]] += 1;
    }
    else {
      frutas[fruits[i]] = 1;
    }
  }
  return frutas;
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

console.log(cestaDeFrutas(basket));