import { JosefinSlab_400Regular, useFonts } from '@expo-google-fonts/josefin-slab';
import { StyleSheet, Text } from 'react-native';
import StackComponent from './src/routes/stack';
import TabComponent from './src/routes/tab';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSlab_400Regular
  })

  if (!fontsLoaded) {
    return (
      <Text>carregando fonte</Text>
    )
  }

  return <TabComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
