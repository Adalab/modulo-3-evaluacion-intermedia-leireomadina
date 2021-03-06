import React from "react";
import "../stylesheets/_pokemon.scss";
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const pokemonType = props.pokemon.types.map((type, i) => {
    return <li key={i} className="card-inner-list__item">{type}</li>;
  });
  return (
    <article className = "card-inner">
      <img src={props.pokemon.url} alt={`Imagen de ${props.pokemon.name}`} title={`Imagen de ${props.pokemon.name}`} className = "card-inner__image"/>
      <h2 className = "card-inner__title">{props.pokemon.name}</h2>
      <ul className = "card-inner-list">{pokemonType}</ul>
    </article>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon;
