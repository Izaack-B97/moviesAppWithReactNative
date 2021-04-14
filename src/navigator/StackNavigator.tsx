import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { InfoScreen } from '../screens/InfoScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle:{ 
                backgroundColor: 'white'
            }
        }}>
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="InfoScreen" component={ InfoScreen } />
        </Stack.Navigator>
    );
}