import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Contacts from '../screens/Contacts';
import ShoppingCart from '../screens/ShoppingCart';
import WhisList from '../screens/WhisList';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Shopping Carts" component={ShoppingCart} />
      <Tab.Screen name="WhisList" component={WhisList} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
