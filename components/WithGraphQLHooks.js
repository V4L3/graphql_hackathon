import { useQuery } from 'graphql-hooks';
import QUERY_POKEMON from '../config/queryPokemon';
import Pokedex from './Pokedex';

const WithGraphQLHooks = (props) => {
  const { loading, error, data } = useQuery(QUERY_POKEMON, {
    // variables: {
    //   limit: 10
    // }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Bad Happened</p>

  return <Pokedex data={data} {...props} />;
};

export default WithGraphQLHooks;
