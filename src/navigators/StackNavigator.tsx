import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Secret from '../screens/Secret';
import {RootStackParamList} from '../types/navigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen
        name="Profile"
        options={{
          headerBackTitleVisible: false,
        }}
        component={Profile}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: 'Home Screen',
        }}
        component={Home}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Secret"
        component={Secret}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
