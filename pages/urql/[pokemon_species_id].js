import { useRouter } from 'next/router'
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {withClient, getClient } from '../../config/urqlClient';
import QUERY_POKEMON_BY_ID from '../../config/queryPokemonById';
import QUERY_POKEMON from '../../config/queryPokemon';
import { useQuery, Provider } from 'urql';
import Pokemon from '../../components/Pokemon';

const PokemonDetail = () => {
    const router = useRouter()
    const { pokemon_species_id } = router.query
    const [res] = useQuery({ query: QUERY_POKEMON_BY_ID, variables:{id: pokemon_species_id}});
    const [res2] = useQuery({ query: QUERY_POKEMON });
  return (
    <Provider value={getClient()}> 
      {res.fetching ? <p>Loading...</p> : <Pokemon data={res.data} />}
    </Provider>
  );
};


export default withClient(PokemonDetail);

