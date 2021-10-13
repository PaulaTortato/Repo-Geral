let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numeros of numbers) {
  console.log(numeros);
}


let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];  
}

console.log(soma);

let mediaAritimetica = soma / numbers.length;

if (mediaAritimetica > 20) {
  console.log('Média maior que 20');
}
else {
  console.log('Média menor ou igual a 20');
}


let maiorNumero = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
  else {
    maiorNumero = maiorNumero;
  }
}

console.log(maiorNumero);

let impares = 0;

for (let indice = 0; indice < numbers.length; indice++) {
  if (numbers[indice] % 2 != 0) {
    impares++;
  }
  else {
    impares = impares;
  }
}

if (impares > 0) {
  console.log(impares);
}
else {
  console.log('Nenhum valor ímpar encontrado.')
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

console.log(menorNumero);

let meusNumeros = [];

for (let n = 1; n <= 25; n++) {
  meusNumeros.push(n);
}

console.log(meusNumeros);

for (let ind = 0; ind < meusNumeros.length; ind++) {
  console.log(meusNumeros[ind] / 2);
}


let numbersMult = [];

for (let p = 0; p < numbers.length; p++) {
  if (numbers[p] == numbers[numbers.length - 1]) {
    numbersMult.push(numbers[p] * 2);
  }
  else {
    numbersMult.push(numbers[p] * numbers[p + 1])
  }
}

console.log(numbersMult);


// Referência para o parametro do sort: https://www.w3schools.com/jsref/jsref_sort.asp
console.log(numbers.sort(function(a, b){return a-b}));
console.log(numbers.sort(function(a, b){return b-a}));
