
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Entrega } from '../screens/Entrega/Entrega';
import { Home } from '../screens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SuaCesta } from '../screens/SuaCesta/SuaCesta';
const Tab = createBottomTabNavigator();

type TabNavigation = {
    Home: undefined;
    Entrega: undefined;
}

export type TabTypes = BottomTabNavigationProp<TabNavigation>

export default function TabComponent() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Começar') {
                            iconName = focused
                                ? 'numeric-0-box-outline'
                                : 'tooltip-check';
                        } else if (route.name === 'Entrega') {
                            iconName = focused
                                ? 'numeric-1-box-outline'
                                : 'tooltip-check';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }

                        // You can return any component that you like here!
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'green',
                })}
            >
                <Tab.Screen name="Começar" component={Home} />
                <Tab.Screen name="Entrega" component={Entrega} />
                <Tab.Screen name="Sua Cesta ≠" component={SuaCesta} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
