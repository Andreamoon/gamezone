import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {ReviewDetails} from '../screens/ReviewDetails';
import {About} from '../screens/About';

// Assuming you have already imported the screens and defined them
interface Screens {
  [key: string]: {screen: React.FC};
}
export const screens: Screens = {
  Home: {
    screen: Home,
  },
  Details: {screen: ReviewDetails},
  About: {
    screen: About,
  },
};
