import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';

type SecretScreenProps = StackScreenProps<RootStackParamList, 'Secret'>;

const Secret = ({route}: SecretScreenProps) => {
  return (
    <View>
      <Text>Hello {route.params.name} :D</Text>
    </View>
  );
};

export default Secret;
