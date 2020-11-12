import "../stylesheets/App.scss";
import React from 'react';
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons
    }
  }
  render() {
    // console.log(this.state.pokemons);
    // Pasamos los datos del archivo json a través del estado del componente
    const pokemonData = this.state.pokemons;
    // console.log(pokemonData);
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

export default App;
