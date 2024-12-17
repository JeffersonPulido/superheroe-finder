import { useState } from "react";
import { useHeroes } from "../context/HeroesContext";
import { fetchHeroes } from './../api/superheroesApi';
import HeroList from './../components/HeroList';

export default function HomePage() {
  const [query, setQuery] = useState("");
  const { state, dispatch } = useHeroes();

  const handleSearch = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const data = await fetchHeroes(query);
    dispatch({ type: "SET_HEROES", payload: data.results || [] })
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Busca tu superheroe favorito..."
          className="w-1/2 p-2 border"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="p-2 ml-2 text-white bg-blue-500"
        >
          Buscar
        </button>
      </div>
      {state.loading ? <p>Cargando heroes...</p> : <HeroList heroes={state.heroes}/>}
    </div>
  );
}
