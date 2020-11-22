import "../stylesheets/App.scss";
import React from 'react';
import data from "../data/data.json";
import PokeList from "./PokeList";
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data
    }
  }
  render() {
    const pokemonData = this.state.pokemons;
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-header__title">Mi lista de Pokemon</h1>
        </header>
        <main>
          <section className="main-section">
            <PokeList pokemons={pokemonData}/>
          </section>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  pokemonData: PropTypes.object
}


export default App;
