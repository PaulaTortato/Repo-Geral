const myName = "Paula";

const birthCity = "Curitiba";
// birthCity = "Tukstumênia"

let birthYear = 1997;
birthYear = 2030;

const base = 5;

const height = 8;

const area = base * height;

const perimeter = base * 2 + height * 2;

const notaDesafio = 92;

let resultadoDesafio;

if (notaDesafio >= 80) {
  resultadoDesafio = 'aprovado'
}
else if (notaDesafio < 80 && notaDesafio >= 60) {
  resultadoDesafio = 'lista'
}
else {
  resultadoDesafio = 'reprovado'
}

console.log(myName);
console.log(birthCity);
console.log(birthYear);
console.log(area);
console.log(perimeter);

switch (resultadoDesafio) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'reprovado':
    console.log('Você foi reprovada(o).')
    break;
  default:
    console.log('Não se aplica.')
}