const QUERY_POKEMON = `
  query queryPokemon($limit: Int = 649) {
    pokemon_v2_pokemon(limit: $limit) {
      name
      pokemon_species_id
      order
      is_default
      id
      height
      base_experience
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesdescriptions {
          description
        }
        pokemon_v2_pokemoncolor {
          name
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
          flavor_text
          language_id
        }
      }
    }
  }
`;

export default QUERY_POKEMON;
