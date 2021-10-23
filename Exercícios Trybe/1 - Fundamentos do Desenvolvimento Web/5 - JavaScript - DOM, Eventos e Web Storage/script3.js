function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listaDays = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  let dia = dezDaysList[i];
  let diasDoMes = document.createElement('li');
  diasDoMes.innerText = dia;
  diasDoMes.className = 'day';
  if (diasDoMes.innerText == 24 || diasDoMes.innerText == 25 || diasDoMes.innerText == 31) {
    diasDoMes.classList.add('holiday');
  }
  if (diasDoMes.innerText == 4 || diasDoMes.innerText == 11 || diasDoMes.innerText == 18 || diasDoMes.innerText == 25) {
    diasDoMes.classList.add('friday');
  }
  listaDays.appendChild(diasDoMes);
}

function holidays(string) {
  let btn = document.createElement('button');
  btn.innerText = string;
  btn.id = 'btn-holiday';
  let btnContainer = document.querySelector('.buttons-container')
  btnContainer.appendChild(btn);
}

holidays('Feriados');

let btn = document.querySelector('#btn-holiday');
btn.addEventListener('click', function () {
  let holidays = document.querySelectorAll('.holiday')
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor == 'lightblue') {
      holidays[i].style.backgroundColor = 'lightblue';
    } else if (holidays[i].style.backgroundColor != 'pink') {
      holidays[i].style.backgroundColor = 'pink';
    } else if (holidays[i].style.backgroundColor != 'rgb(238,238,238)') {
      holidays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

function fridays(string) {
  let friday = document.createElement('button');
  friday.innerText = string;
  friday.id = 'btn-friday';
  let btnContainer = document.querySelector('.buttons-container')
  btnContainer.appendChild(friday);
}

fridays('Sexta-feira');

let friday = document.querySelector('#btn-friday');
friday.addEventListener('click', function () {
  let fridays = document.querySelectorAll('.friday')
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].style.backgroundColor == 'pink') {
      fridays[i].style.backgroundColor = 'pink';
    } else if (fridays[i].style.backgroundColor != 'lightblue') {
      fridays[i].style.backgroundColor = 'lightblue';
    } else if (fridays[i].style.backgroundColor != 'rgb(238,238,238)') {
      fridays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

function zoom() {
  let li = document.querySelectorAll('li.day');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('mouseenter', function (event) {
      event.target.style.fontSize = '30px';
    })
  }
}

zoom();

function zoomOut() {
  let li = document.querySelectorAll('li.day');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('mouseleave', function (event) {
      event.target.style.fontSize = '20px';
    })
  }
}

zoomOut();

function tasks(string) {
  let newTask = document.createElement('span');
  newTask.innerText = string;
  let taskDiv = document.querySelector('.my-tasks');
  taskDiv.appendChild(newTask);
}

tasks('Estudar:');

function color(cor) {
  let newDiv = document.createElement('div');
  newDiv.style.backgroundColor = cor;
  newDiv.className = 'task';
  let taskDiv = document.querySelector('.my-tasks');
  taskDiv.appendChild(newDiv);
}

color('blue');

let taskDiv = document.querySelector('div.task');
function selectTask() {
  taskDiv.addEventListener('click', function (event) {
    if (taskDiv.className != 'task selected') {  
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  });
}

selectTask();

function marker () {
  let li = document.querySelectorAll('li.day');
  for (let i = 0; i < li.length; i += 1) {
  li[i].addEventListener('click', function (event) {
    if (li[i].style.color != taskDiv.style.backgroundColor) { 
      li[i].style.color = taskDiv.style.backgroundColor;
    } else {
      li[i].style.color = 'rgb(119,119,119)';
    }
   })
  }
};

 marker();
 
function addTask () {
  let inputBox = document.querySelector('#task-input')
  let taskBtn = document.querySelector('#btn-add')
  let taskList = document.querySelector('.task-list')
  taskBtn.addEventListener('click', function () {
    let newTask = document.createElement('li');
    newTask.innerText = inputBox.value;
    taskList.appendChild(newTask);
  }) 
  inputBox.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
    let newTask = document.createElement('li');
    newTask.innerText = inputBox.value;
    taskList.appendChild(newTask);
    }
  }) 
}

addTask();