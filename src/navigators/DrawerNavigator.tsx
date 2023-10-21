import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import StackNavigator from './StackNavigator';
import Settings from '../screens/Settings';
import {Text, TouchableOpacity, View} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerContent = (props: DrawerContentComponentProps) => {
  console.log(props);
  return (
    <DrawerContentScrollView>
      <View>
        <Text>Navigation App</Text>
      </View>

      {/* Menu */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('StackNavigator')}>
        <Text>StackNavigator</Text>
      </TouchableOpacity>
      {/* Menu */}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
