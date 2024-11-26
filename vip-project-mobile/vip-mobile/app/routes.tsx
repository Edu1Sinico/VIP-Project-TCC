import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './routes/homeNavigator';
import { CashNavigator } from './routes/cashNavigator';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Home"  // Define "Home" como a página inicial
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },  // Aumenta o tamanho da fonte
                tabBarActiveTintColor: '#166CE2',  // Cor do ícone quando está focado
                tabBarInactiveTintColor: 'gray',  // Cor do ícone quando não está focado
                tabBarStyle: { height: 70 },  // Aumenta a altura do bottomNavigator
            }}
        >
            <Tab.Screen
                name="Saldo"
                component={CashNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={40} color={color} name="money" />
                    ),
                    tabBarLabel: 'Saldo',  // Define o texto da label
                }}
                initialParams={{ pageType: 'add' }} // Passa o parâmetro "pageType"
            />
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={40} color={color} name="home" />
                    ),
                    tabBarLabel: 'Início',  // Define o texto da label, caso queira customizar
                }}
            />
        </Tab.Navigator>
    );
};