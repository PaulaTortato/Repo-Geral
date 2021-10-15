let n = 5;

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

for (let i = 1; i <= n; i++) {
  
}