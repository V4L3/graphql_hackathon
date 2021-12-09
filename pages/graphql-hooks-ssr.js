import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GraphQLClient } from 'graphql-hooks';
import QUERY_POKEMON from '../config/queryPokemon';
import Pokedex from '../components/Pokedex';
import memCache from 'graphql-hooks-memcache';
import Link from 'next/link';

export default function GraphQLHooks({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>GraphQL Hooks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.flexWrapper}>
          <Link href="/graphql-hooks">Go To GraphQl-Hooks</Link>
          <Link href="/">Go Home</Link>
        </div>
        <h1 className={styles.title}>Welcome to the World of Pokemon!</h1>
        <Pokedex data={data} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient({
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    ssrMode: true,
    cache: memCache(),
  });

  const { data, error } = await client.request({
    query: QUERY_POKEMON,
    // variables: {
    //   limit: 1
    // }
  });

  return {
    props: {
      data,
    },
  };
};
