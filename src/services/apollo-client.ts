import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const apolloClient = new ApolloClient<NormalizedCacheObject>({
  uri: import.meta.env.VITE_BASE_API as string,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN as string}`,
  },
});

export default apolloClient;
