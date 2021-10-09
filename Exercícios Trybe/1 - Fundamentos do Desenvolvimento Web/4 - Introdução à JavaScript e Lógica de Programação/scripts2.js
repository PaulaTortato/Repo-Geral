const a = 5;

const b = 12;

const c = 30;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

if (a > b) {
  console.log(a);
}
else {
  console.log(b);
}

if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else {
  console.log(c)
}

if (a > 0) {
  console.log('positivo');
}
else if (a < 0) {
  console.log('negativo');
} 
else {
  console.log('zero');
}

const ladoA = 35;

const ladoB = 35;

const ladoC = 110;

if (ladoA + ladoB + ladoC == 180) {
  console.log(true);
}
else if (ladoA + ladoB + ladoC < 0) {
  console.log('Erro! Valor inválido.');
}
else {
  console.log(false);
}

let pecaXadrez = 'rainha';

switch (pecaXadrez) {
  case 'peao':
    console.log('1 ou 2 casas para frente no primeiro movimento, 1 para frente nos demais movimentos. Toma em diagonal.');
    break;
  case 'cavalo':
    console.log('Anda em L para qualquer direção. Pula sobre peças.');
    break;
  case 'bispo':
    console.log('Anda em diagonal.');
    break;
  case 'torre':
    console.log('Anda em linha reta para qualquer lado.');
    break;
  case 'rainha':
    console.log('Anda em qualquer direção.');
    break;
  case 'rei':
    console.log('Anda 1 casa em qualquer direção.');
    break;
  default:
    console.log('Erro! Peça inválida.')
}

let nota = 145;

if (nota > 100 || nota < 0) {
  console.log('Erro! Nota inválida.');
}
else if (nota >= 90 && nota <= 100) {
  nota = 'A';
  console.log(nota);
}
else if (nota >= 80) {
  nota = 'B';
  console.log(nota);
}
else if (nota >= 70) {
  nota = 'C';
  console.log(nota);
}
else if (nota >= 60) {
  nota = 'D';
  console.log(nota);
}
else if (nota >= 50) {
  nota = 'E';
  console.log(nota);
}
else {
  nota = 'F';
  console.log(nota);
}

const num1 = 12;

const num2 = 26;

const num3 = 98;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
}
else {
  console.log(false);
}

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
  console.log(true);
}
else {
  console.log(false);
}

const custoProduto = 500;

const valorVenda = 750;

const impostoSobreCusto = custoProduto * 0.2;

let custoTotal = custoProduto + impostoSobreCusto;

let lucro = valorVenda - custoTotal;

let lucroMil = lucro * 1000;
console.log(lucroMil);

let salarioBruto = 1500;

let inss;

let ir;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
}
else {
  inss = salarioBruto * 0.15;
}

if (inss > 570.88) {
  inss = 570.88;
}
else {
  inss = inss;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.8;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.8;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
}
else {
  ir = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - ir;
console.log(salarioLiquido);