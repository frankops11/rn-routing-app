import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import Settings from '../screens/Settings';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Text>Navigation App</Text>
      </View>

      {/* Menu */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('BottomTabsNavigator')}>
        <Text>Tabs</Text>
      </TouchableOpacity>
      {/* Menu */}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
