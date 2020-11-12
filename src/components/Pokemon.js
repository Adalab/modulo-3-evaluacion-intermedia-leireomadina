import React from "react";
import "../stylesheets/_pokemon.scss";


const Pokemon = (props) => {
  const pokemonType = props.pokemon.types.map((type, i) => {
    return <li key={i} className="card-inner-list__item">{type}</li>;
  });
  return (
    <article className = "card-inner">
      <img src={props.pokemon.url} alt={`imagen de ${props.pokemon.name}`} title={`imagen de ${props.pokemon.name}`} className = "card-inner__image"/>
      <h2 className = "card-inner__title">{props.pokemon.name}</h2>
      <ul className = "card-inner-list">{pokemonType}</ul>
    </article>
  );
};

export default Pokemon;
