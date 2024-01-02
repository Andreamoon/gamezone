import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {ReviewDetails} from '../screens/ReviewDetails';
import {About} from '../screens/About';

// Assuming you have already imported the screens and defined them
interface Screens {
  [key: string]: {
    screen: React.FC;
    navigationOptions: {title: string; headerStyle?: {}};
  };
}
export const screens: Screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Gamezone',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'ReviewDetails',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'Gamezone',
    },
  },
};
