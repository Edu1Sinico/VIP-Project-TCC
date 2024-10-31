import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './(tabs)/home/home';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <Icon size={40} color={color} name="home" />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
};