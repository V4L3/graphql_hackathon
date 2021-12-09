const Pokedex = ({data}) => {
  console.log(data.pokemon_v2_pokemon);
  return (
    <>
      {data?.pokemon_v2_pokemon &&
        data.pokemon_v2_pokemon.map((pokemon, i) => (
            <li key={i}>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.base_experience}</p>
              <p>{pokemon.height}</p>
              <p>{pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts.reduce((acc, currentText) => {
                console.log(typeof currentText.flavor_text);
                return `${acc} ${currentText.flavor_text}`
              } ), ''}</p>
            </li>
        ))}
    </>
  );
};

export default Pokedex;

