import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getClient, withClient } from '../config/urqlClient';
import QUERY_POKEMON from '../config/queryPokemon';
import { useQuery, Provider } from 'urql';
import Pokedex from '../components/Pokedex';

const Urql = () => {
  const [res] = useQuery({ query: QUERY_POKEMON });
  console.log(res);
  return (
    <Provider value={getClient()}>
      <div className={styles.container}>
        <Head>
          <title>GraphQL Hooks</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the World of Pokemon!</h1>
            {res?.data && <Pokedex data={res.data} />}
        </main>
      </div>
    </Provider>
  );
};

export default withClient(Urql);
