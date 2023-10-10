import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface SettingsProps extends StackScreenProps<any, any> {}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Settings;
