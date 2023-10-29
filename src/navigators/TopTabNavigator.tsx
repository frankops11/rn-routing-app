import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from '../screens/Chats';
import Novedades from '../screens/Novedades';
import Llamadas from '../screens/Llamadas';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigatorCustom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Novedades" component={Novedades} />
      <Tab.Screen name="LLamadas" component={Llamadas} />
    </Tab.Navigator>
  );
}
