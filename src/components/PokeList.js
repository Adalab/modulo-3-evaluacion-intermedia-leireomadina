import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/_pokeList.scss";

class PokeList extends React.Component {
  render() {
    // console.log(this.props);
    const pokemon = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id} className="card">
          <Pokemon pokemon={pokemon}/>
        </li>
      );
    });
    return (
      <div>
        <ul className="card-container">
         {pokemon}
        </ul>
      </div>
    );
  }
}

export default PokeList;
