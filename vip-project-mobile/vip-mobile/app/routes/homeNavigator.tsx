import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../(tabs)/home/home';
import ProfileScreen from '../(tabs)/internal_pages/internal_user_pages/userPage';
import { CashNavigator } from './cashNavigator';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,  // Removendo o cabeçalho
                }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Saldo" component={CashNavigator} options={{
                    animation: 'fade'
                }} />
                <Stack.Screen name="Perfil" component={ProfileScreen} options={{
                    animation: 'fade'
                }} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}