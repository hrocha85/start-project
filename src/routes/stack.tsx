
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home';
import { Entrega } from '../screens/Entrega/Entrega';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Entrega: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Entrega" component={Entrega} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
