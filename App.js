import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './navigation/Tabs';
import AuthNavigator from './navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/UserLog/Login';



export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
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
/**<NavigationContainer>
      <Tabs/>
    </NavigationContainer> */
