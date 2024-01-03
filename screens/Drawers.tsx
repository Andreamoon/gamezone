import {createDrawerNavigator} from '@react-navigation/drawer';
import {About} from './About';
import {ReviewDetails} from './ReviewDetails';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Details" component={ReviewDetails} />
    </Drawer.Navigator>
  );
}
