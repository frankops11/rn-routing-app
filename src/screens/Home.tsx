import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface HomeProps extends StackScreenProps<any, any> {}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default Home;
