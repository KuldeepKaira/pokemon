import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [showState, setShowState] = useState(false);
  const [pokeData, setPokeData] = useState("");
  const searchBtnHandler = async (pokeName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const data = await res.json();
    if (data) {
      setShowState(true);
      setPokeData(data);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <SearchBar onSearchClick={(pokeName) => searchBtnHandler(pokeName)} />
        {showState && <PokemonCard data={pokeData} />}
      </div>
    </div>
  );
}

export default App;
