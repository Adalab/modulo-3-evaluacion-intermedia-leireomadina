import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemons);
    const pokemon = this.props.pokemons.map((pokemon) => {
      return (
        <li>
          <Pokemon pokemon={pokemon}/>
        </li>
      );
    });
    return (
      <div>
        <ul>
         {pokemon}
        </ul>
      </div>
    );
  }
}

export default PokeList;
