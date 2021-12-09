import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from '@urql/core';
import { initUrqlClient, withUrqlClient } from 'next-urql';

const isServer = typeof window === 'undefined';

const makeSsrCache = () =>
  ssrExchange({
    isClient: !isServer,
    initialState: !isServer ? window.__URQL_DATA__ : undefined,
    staleWhileRevalidate: !isServer,
  });

const makeClient = (ssrCache) => {
  const clientConfig = {
    url: 'https://beta.pokeapi.co/graphql/v1beta' || '',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  };
  return initUrqlClient(clientConfig, true);
};

const getClient = () => {
  const ssrCache = makeSsrCache();
  return [makeClient(ssrCache), ssrCache];
};

const withClient = (Page) => {
  return withUrqlClient(
    (ssr) => ({
      url: 'https://beta.pokeapi.co/graphql/v1beta' || '',
      exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    }),
    {
      ssr: false, // Important so we don't wrap our component in getInitialProps
    }
  )(Page);
};

export { makeClient, makeSsrCache, withClient, getClient };
