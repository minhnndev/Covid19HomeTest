import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile, Category, Phone} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator initialRouteName="Info">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Phone"
        component={Phone}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default appStack;
