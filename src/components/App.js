import "../stylesheets/App.scss";
import React from 'react';
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

class App extends React.Component {

  render() {
    // console.log(pokemons);
    return (
      <div className="App">
        <header>
          <h1>Mi lista de Pokemon</h1>
        </header>
        <main>
          <section>
            <PokeList pokemons={pokemons}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
