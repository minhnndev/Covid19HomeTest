import {ApolloClient, InMemoryCache} from '@apollo/client';
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  uri: 'https://corona-api.kompa.ai/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
