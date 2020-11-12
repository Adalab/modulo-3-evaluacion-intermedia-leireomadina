import React from "react";

const Pokemon = (props) => {
  const pokemonType = props.pokemon.types.map((type, i) => {
    return <li key={i}>{type}</li>;
  });
  return (
    <article>
      <img src={props.pokemon.url} alt={`imagen de ${props.pokemon.name}`} title={`imagen de ${props.pokemon.name}`} />
      <h2>{props.pokemon.name}</h2>
      <ul>{pokemonType}</ul>
    </article>
  );
};

export default Pokemon;
