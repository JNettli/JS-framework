export function characterCard({}) {
    pokemon.map(pokemon => (
            <li key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </li>
          ))
}