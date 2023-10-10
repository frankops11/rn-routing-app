import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouterStack from './src/router/StackRouter';

const App = () => {
  return (
    <NavigationContainer>
      <RouterStack />
    </NavigationContainer>
  );
};

export default App;
