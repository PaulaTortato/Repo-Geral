let n = 7;

for (let index = 1; index <= n; index++) {
  console.log('*'.repeat(n));
}

console.log('--------------------');

for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i));
}

console.log('--------------------');

for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n-i) + '*'.repeat(i));
}

console.log('--------------------');

for (let i = 1; i <= n; i += 2) {
  console.log(' '.repeat((n-i) / 2) + '*'.repeat(i));
}

console.log('--------------------');

let number = 11;
let ePrimo;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    ePrimo = 'O número ' + number + ' não é primo.';
    break;
  }
  else {
    ePrimo = 'O número ' + number + ' é primo.';
  };
}

console.log(ePrimo);