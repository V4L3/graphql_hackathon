import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getClient, withClient } from '../config/urqlClient';
import QUERY_POKEMON from '../config/queryPokemon';
import { useQuery, Provider, client } from 'urql';
import PokedexNoImage from '../components/PokedexNoImage';
import Link from 'next/link';


const UrqlSsr = () => {
  const [res] = useQuery({ query: QUERY_POKEMON });

  return (
    <Provider value={getClient()}>
      <div className={styles.container}>
        <Head>
          <title>GraphQL Hooks</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.flexWrapper}>
            <Link href="/urql">Go to Urql</Link>
            <Link href="/urql-ssr">Go to Urql-SSR</Link>
            <Link href="/">Go Home</Link>
          </div>
          <h1 className={styles.title}>Welcome to the World of Pokemon!</h1>
          {res.fetching ? <p>Loading...</p> : <PokedexNoImage data={res.data} />}
        </main>
      </div>
    </Provider>
  );
};

export const getStaticProps = async () => {
  const [client, ssrCache] = getClient();

  await client?.query(QUERY_POKEMON).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withClient(UrqlSsr);
