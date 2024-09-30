import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingScreen';
import AntDesign from '@expo/vector-icons/AntDesign';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: number; name: string };
  Settings: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: (props) => (
          <AntDesign
            name="setting"
            size={24}
            style={{ marginRight: 16, fontSize: 30, color: 'black' }}
            onPress={() => navigation.navigate('Settings')}
          />
        ),
      })}
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
    </RootStack.Navigator>
  );
}
