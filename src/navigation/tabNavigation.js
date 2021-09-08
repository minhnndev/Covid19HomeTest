import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/theme';

import {Home, Scan, Category, ScanHistory} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Quét mã') {
            iconName = focused ? 'qrcode' : 'qrcode';
          } else if (route.name === 'Danh mục') {
            iconName = focused ? 'menu' : 'menu';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{display: 'flex'}],
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Sức khỏe" component={LeaseCarScreen} /> */}
      <Tab.Screen
        name="Quét mã"
        component={Scan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Danh mục"
        component={Category}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
