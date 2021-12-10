import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends Component {
  render() {
  return (
    <Pokedex pokemons={pokemons} />
  );
  }
}

export default App;
