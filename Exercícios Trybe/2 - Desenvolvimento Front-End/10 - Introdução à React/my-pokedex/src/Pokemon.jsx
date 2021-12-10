import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke;
    return (
      <section className="poke">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt="" />
      </section>
    )
  }
}

export default Pokemon;