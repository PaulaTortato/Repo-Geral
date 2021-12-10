import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    value.map((tarefa) => <li>{tarefa}</li>)
  );
}

const tarefas = ['acordar', 'café da manhã', 'exercícios', 'almoço', 'estudar', 'jantar', 'dormir'];

class App extends Component {
  render() {
    return (
      Task(tarefas)
    );
  }
}

export default App;
