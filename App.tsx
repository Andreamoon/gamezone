/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Home} from './screens/Home';
const nunito_regular = require('./assets/fonts/Nunito-Regular.ttf');
const nunito_bold = require('./assets/fonts/Nunito-Bold.ttf');
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ReviewDetails} from './screens/ReviewDetails';

const Stack = createNativeStackNavigator();

export function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
