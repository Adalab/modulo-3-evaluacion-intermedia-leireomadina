import React from "react";

const Pokemon = (props) => {
  const pokemonType = props.pokemon.types.map((type) => {
    return <li>{type}</li>;
  });
  console.log(props.pokemon);
  console.log(props.pokemon.name);

  return (
    <article>
      <img src={props.pokemon.url} />
      <h2>{props.pokemon.name}</h2>
      <ul>{pokemonType}</ul>
    </article>
  );
};

export default Pokemon;
