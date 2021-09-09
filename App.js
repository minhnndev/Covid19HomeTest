/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider, gql} from '@apollo/client';
// import store from './src/redux/store/store';
import {client} from './src/api/graphql';

import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';
import Tabs from './src/navigation/tabNavigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <StoreProvider store={store}> */}
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      {/* </StoreProvider> */}
    </ApolloProvider>
  );
};

export default App;
