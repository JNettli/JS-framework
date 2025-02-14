import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [url, setUrl] = useState<string>(
        "https://pokeapi.co/api/v2/pokemon/"
    );
    const [prevUrl, setPrevUrl] = useState<string>("");
    const [nextUrl, setNextUrl] = useState<string>("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState<pokeInfo[]>([]);
    type pokeInfo = {
        id: number;
        name: string;
        url: string;
        sprites: {
            front_default: string;
        };
    };

    useEffect(() => {
        async function getPokemon() {
            try {
                const res = await fetch(url);
                const pokeData = await res.json();
                setPrevUrl(pokeData.previous);
                setNextUrl(pokeData.next);
                setData(pokeData.results);
            } catch {
                console.error("Wronge");
            }
        }
        getPokemon();
    }, [page, url]);
    return (
        <>
            <div className="bg-slate-900 h-full items-center justify-center">
                <h1 className="text-5xl text-white">Pokédex</h1>
                {data.map((pokemon: pokeInfo) => {
                    console.log(pokemon);
                    const splitUrl = pokemon.url.split("/");
                    const pokemonId = splitUrl[splitUrl.length - 2];
                    const pokemonImageUrlBase =
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
                    console.log(pokemonImageUrlBase + pokemonId + ".png");

                    return (
                        <>
                            <h2 className="text-white" key={pokemon.id}>
                                {pokemon.name}
                                <img
                                    src={
                                        pokemonImageUrlBase + pokemonId + ".png"
                                    }
                                />
                            </h2>
                        </>
                    );
                })}
                <div className="flex gap-4">
                    <div>
                        {prevUrl ? (
                            <button
                                className="bg-yellow-100 p-2 rounded cursor-pointer"
                                onClick={() => {
                                    setUrl(prevUrl);
                                    setPage(page - 1);
                                }}
                            >
                                Prev
                            </button>
                        ) : (
                            <button
                                disabled
                                className="bg-gray-700 p-2 rounded cursor-not-allowed"
                            >
                                Prev
                            </button>
                        )}
                    </div>
                    <div className="text-white text-2xl">{page}</div>
                    <div>
                        {nextUrl ? (
                            <button
                                className="bg-yellow-100 p-2 rounded cursor-pointer"
                                onClick={() => {
                                    setUrl(nextUrl);
                                    setPage(page + 1);
                                }}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                disabled
                                className="bg-gray-700 p-2 rounded cursor-not-allowed"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
