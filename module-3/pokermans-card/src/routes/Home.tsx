import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
    const [url, setUrl] = useState<string>(
        "https://pokeapi.co/api/v2/pokemon/"
    );
    const [prevUrl, setPrevUrl] = useState<string>("");
    const [nextUrl, setNextUrl] = useState<string>("");
    const [pokeSearch, setPokeSearch] = useState("");
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
                console.log(pokeData);
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
            <label htmlFor="pokeSearch" className="text-white">
                Search Pokes:
            </label>
            <input
                type="text"
                name="pokeSearch"
                className="border-black border-4 rounded-2xl bg-white text-black p-2"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
            {data.map((pokemon: pokeInfo) => {
                const splitUrl = pokemon.url.split("/");
                const pokemonId = splitUrl[splitUrl.length - 2];
                const pokemonImageUrlBase =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

                return (
                    <>
                        <Link to={"/pokemon/" + pokemon.name} key={pokemon.id}>
                            <h2 className="text-white">
                                {pokemon.name}
                                <img
                                    src={
                                        pokemonImageUrlBase + pokemonId + ".png"
                                    }
                                    alt={pokemon.name}
                                />
                            </h2>
                        </Link>
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
        </>
    );
}
