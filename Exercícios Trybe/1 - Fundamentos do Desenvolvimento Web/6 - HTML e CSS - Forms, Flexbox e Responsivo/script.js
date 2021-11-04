let selecBox = document.getElementById('estado');
let estadosBr = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
let btn = document.getElementById('btn-enviar');
let divContainer = document.getElementById('div-container');

for (let i = 0; i < estadosBr.length; i += 1) {
  let novaOp = document.createElement('option');
  novaOp.innerText = estadosBr[i];
  novaOp.value = siglas[i];
  selecBox.appendChild(novaOp);
}

btn.addEventListener('click', function (event) {
  event.preventDefault();
  let div = document.createElement('div');
  let inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      let div = document.createElement('div');
      div.style.color = 'red';
      div.innerText = 'Preencha o campo: ' + inputs[i].previousElementSibling.innerText;
      divContainer.appendChild(div);
    } else if (div.innerText.includes('Preencha')) {
      break;
    } else {
      div.innerText = inputs[i].previousElementSibling.innerText + ': ' + inputs[i].value;
      divContainer.appendChild(div);
    }
  }
});
