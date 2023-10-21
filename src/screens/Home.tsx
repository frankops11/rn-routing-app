import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go page Secret"
        onPress={() =>
          navigation.navigate('Secret', {
            name: 'Francisco ',
          })
        }
      />
    </View>
  );
};

export default Home;
