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