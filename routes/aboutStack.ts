import {About} from '../screens/About';

// Assuming you have already imported the screens and defined them
interface Screens {
  [key: string]: {
    screen: React.FC;
    navigationOptions: {title: string; headerStyle?: {}};
  };
}
export const AboutScreens: Screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About Gamezone',
      headerStyle: {backgroundColor: '#eee'},
    },
  },
};
