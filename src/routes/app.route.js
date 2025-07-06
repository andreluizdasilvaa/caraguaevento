import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from 'react-native-vector-icons/Feather'

import Login from "../pages/login";
import register_business from "../pages/register_business";

import Home from "../pages/Home";
import Calendario from "../pages/Calendar";
import Perfil from "../pages/Perfil";

import Notify from "../pages/Notify";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#ccc',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    elevation: 5,
                    shadowOpacity: 0,
                    borderTopColor: '#ccc'
                },
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        activeOpacity={1}
                        style={props.style}
                    />
                )
            }}
        >
            
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="Calendar"
                component={Calendario}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="calendar" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="Notify"
                component={Notify}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="notifications-outline" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen 
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}

function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="MainHome"
        >

            <Stack.Screen
                name="MainHome"
                component={TabRoutes}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="RegisterBusiness"
                component={register_business}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default Routes;