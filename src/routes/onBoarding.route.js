import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Carousel from '../pages/boarding'

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Carousel"
                component={Carousel}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default Routes;