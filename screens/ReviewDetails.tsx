import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {Button} from 'react-native-elements';

export function ReviewDetails({navigation, route}: any) {
  console.log(route);
  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
}
