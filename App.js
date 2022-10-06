import { StyleSheet} from 'react-native';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Search from './Search';
import LiveQ from './LiveQ';
import Notification from './Notification';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={Home} options={{
            title: 'My Home Screen',
            headerStyle: {
            backgroundColor: '#fff',
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            }}/>
        <Drawer.Screen name="Login" component={Login} />        
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="LiveQ" component={LiveQ} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});