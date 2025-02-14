import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Pokemon() {
    const [pokemon, setPokemon] = useState<pokemon | null>(null);
    const [isLoading, setLoading] = useState(true);
    const { name } = useParams();
    const [moveSearch, setMoveSearch] = useState("");

    type pokemon = {
        abilities: [
            {
                ability: {
                    name: string;
                    url: string;
                };
                is_hidden: boolean;
                slot: number;
            }
        ];
        id: number;
        name: string;
        cries: {
            legacy: string;
            latest: string;
        };
        sprites: {
            front_default: string;
            front_shiny: string;
        };
        moves: [
            {
                move: {
                    name: string;
                    url: string;
                };
            }
        ];
    };

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon/" + name
            );
            const data = await res.json();
            console.log(data);
            setPokemon(data);
            setLoading(false);
        }
        getData();
    }, []);

    const filteredMoves = pokemon?.moves.filter(({ move }) =>
        move.name.includes(moveSearch)
    );

    return (
        <>
            {isLoading ? (
                <h2 className="text-white text-4xl">Loading, please wait...</h2>
            ) : (
                <div className="text-white text-4xl">
                    <h1 className="text-white text-6xl">
                        {(name ?? "").charAt(0).toUpperCase() +
                            (name ?? "").slice(1)}
                    </h1>
                    <h2 className="text-white text-4xl">{pokemon?.id}</h2>
                    <img
                        src={pokemon?.sprites.front_default}
                        alt={pokemon?.name}
                    />
                    <img
                        src={pokemon?.sprites.front_shiny}
                        alt={pokemon?.name}
                    />
                    <button
                        onClick={() => {
                            new Audio(pokemon?.cries.legacy).play();
                        }}
                    >
                        Listen!
                    </button>
                    <div>
                        <label htmlFor="moveSearch">Search moves:</label>
                        <input
                            type="text"
                            name="moveSearch"
                            className="border-black border-4 rounded-2xl bg-white text-black p-2"
                            onChange={(e) => {
                                setMoveSearch(e.target.value);
                            }}
                        />
                        {filteredMoves?.map(({ move }) => {
                            return <p key={move.name}>{move.name}</p>;
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
