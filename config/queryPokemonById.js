const QUERY_POKEMON_BY_ID = `
query queryPokemonById($id:Int = 1) {
  pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      __typename
      name
      pokemon_species_id
      order
      is_default
      id
      height
      base_experience
      pokemon_v2_pokemonspecy {
        __typename
        pokemon_v2_pokemonspeciesdescriptions {
          __typename
          description
        }
        pokemon_v2_pokemoncolor {
          __typename
          name
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
          __typename
          flavor_text
          language_id
        }
      }
    }
  }
`;

export default QUERY_POKEMON_BY_ID;
