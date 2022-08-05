import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import ReadingScreen from '../screens/ReadingScreen';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="catalog" component={CatalogScreen} />
                <Stack.Screen name="reading" component={ReadingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}