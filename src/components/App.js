import "../stylesheets/App.scss";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";

function App() {
  console.log(pokemons);
  return (
    <div className="App">
      <header>
        <h1>Mi lista de Pokemon</h1>
      </header>
      <main>
        <section>
          <PokeList />
        </section>
      </main>
    </div>
  );
}

export default App;
