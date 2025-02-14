import { useEffect, useState } from "react";
import "./App.css";
import { PrimaryCard, SecondaryCard } from "./components/cards";

function App() {
    const [count, setCount] = useState(0);
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(50);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonList = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/?limit=${page}&offset=${offset}`
                );
                const data = await res.json();
                const detailsPromises = data.results.map((pokemon) =>
                    fetch(pokemon.url).then((res) => res.json())
                );
                const details = await Promise.all(detailsPromises);

                const existingIds = new Set(pokemon.map((p) => p.id));

                const newPokemon = details.filter(
                    (p) => !existingIds.has(p.id)
                );

                setPokemon((prev) => [...prev, ...newPokemon]);
            } catch (error) {
                console.error("Failed fetching Pokémon data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, [page, offset]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <h1>Pokémon List</h1>
                <ul>
                    {pokemon.map((pokemon) => (
                        <li key={pokemon.id}>
                            <h2>{pokemon.name}</h2>
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <h1>Pokedex!</h1>
            <button
                onClick={() => {
                    setOffset((prevOffset) => prevOffset + page);
                }}
            >
                Load More
            </button>
        </>
    );
}

export default App;
