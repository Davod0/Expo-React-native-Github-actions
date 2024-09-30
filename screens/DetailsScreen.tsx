import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen(props: Props) {
  const name = props.route.params?.name;
  const id = props.route.params?.id;
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Name: {name}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
