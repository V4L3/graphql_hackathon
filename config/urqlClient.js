import { ssrExchange, dedupExchange, cacheExchange, fetchExchange } from '@urql/core';
import { initUrqlClient, withUrqlClient } from 'next-urql';



const isServer = typeof window === 'undefined';


const makeConfig = () => {
  return {
    url: 'https://beta.pokeapi.co/graphql/v1beta' || '',
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_PREVIEW_TOKEN ?? ''}`,
      },
    }
  };
};

const makeSsrCache = () =>
  ssrExchange({
    isClient: !isServer,
    initialState: !isServer ? window.__URQL_DATA__ : undefined,
    staleWhileRevalidate: !isServer,
  });

const makeClient = (ssrCache, isPreviewMode = false) => {
  const clientConfig = {
    ...makeConfig(isPreviewMode),
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  };
  return initUrqlClient(clientConfig, true);
};

const getClient = (isPreviewMode = false) => {
  const ssrCache = makeSsrCache();
  return [makeClient(ssrCache, isPreviewMode), ssrCache];
};

const withClient = (Page) => {
  return withUrqlClient(
    (ssr) => ({
      ...makeConfig(false),
      exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    }),
    {
      ssr: false, // Important so we don't wrap our component in getInitialProps
    }
  )(Page);
};

export { makeClient, makeSsrCache, withClient, getClient };
