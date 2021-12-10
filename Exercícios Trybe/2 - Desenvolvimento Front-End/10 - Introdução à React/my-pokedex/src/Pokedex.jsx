import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <>
      <h1>PokéDex</h1>
      <article>
        {pokemons.map((pokemon) => <Pokemon poke={pokemon} key={pokemon.id} />)}
      </article>
      </>
    )
  }
}

export default Pokedex;