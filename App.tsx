import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, JosefinSlab_400Regular } from '@expo-google-fonts/josefin-slab'
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSlab_400Regular
  })

  if (!fontsLoaded) {
    return (
      <Text>carregando fonte</Text>
    )
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
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
