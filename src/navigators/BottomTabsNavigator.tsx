import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ShoppingCart from '../screens/ShoppingCart';

import StackNavigator from './StackNavigator';
import {TopTabNavigatorCustom} from './TopTabNavigator';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Stack navigator" component={StackNavigator} />
      <Tab.Screen name="Shopping Carts" component={ShoppingCart} />
      <Tab.Screen name="WhisList" component={TopTabNavigatorCustom} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
