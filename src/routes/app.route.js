import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from 'react-native-vector-icons/Feather'

import Login from "../pages/login";
import Register from "../pages/register";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',

                tabBarStyle: {
                    backgroundColor: '#202225',
                    borderTopWidth: 0
                }
            }}
        >
            
            <Tab.Screen 
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default Routes;