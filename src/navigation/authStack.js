import React from 'react';
import {Auth, Phone, AuthOTP} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator initialRouteName="OTP">
      {/* <Stack.Screen
        name="Phone"
        component={Phone}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="OTP"
        component={AuthOTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default authStack;
