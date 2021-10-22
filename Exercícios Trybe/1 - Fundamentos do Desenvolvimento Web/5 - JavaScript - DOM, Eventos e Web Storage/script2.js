const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// Referência para classList.remove: https://www.w3schools.com/howto/howto_js_remove_class.asp
firstLi.addEventListener('click', function () {
  firstLi.className = 'tech';
  secondLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
});

secondLi.addEventListener('click', function () {
  secondLi.className = 'tech';
  firstLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
});

thirdLi.addEventListener('click', function () {
  thirdLi.className = 'tech';
  secondLi.classList.remove('tech');
  firstLi.classList.remove('tech');
});

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// Referência para input.value: https://www.tabnine.com/academy/javascript/get-value-of-input/
input.addEventListener('change', function () {
  document.querySelector('.tech').innerText = input.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// Referência para location.href: https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
let myTop3 = document.querySelector('#my-spotrybefy');
myTop3.addEventListener('dblclick', function () {
  location.href = 'https://github.com/PaulaTortato/Repo-Trybe';
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Referência para os eventos: https://www.w3schools.com/jsref/dom_obj_event.asp
myTop3.addEventListener('mouseenter', function () {
  myTop3.style.color = '#333';
  myTop3.style.backgroundColor = 'white';
});

myTop3.addEventListener('mouseleave', function () {
  myTop3.style.color = 'white';
  myTop3.style.backgroundColor = '#333';
});

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.