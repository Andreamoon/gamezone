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
import {screens} from './routes/homeStack';

const Stack = createNativeStackNavigator();
const AppContext: any = React.createContext(null);

export function App(): React.JSX.Element {
  return (
    <AppContext.Provider value={Stack}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {Object.entries(screens).map(([name, component]) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component['screen']}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
