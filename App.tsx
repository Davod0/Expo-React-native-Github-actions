import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import RootStackNavigator from './RootStackNavigator';

export default function App() {
  return (
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
