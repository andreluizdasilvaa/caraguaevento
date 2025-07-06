import React, { useContext } from "react";
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from "../context/auth";

import AppRoutes from './app.route';
import OnBoarding from "./onBoarding.route";

export default function Routes() {
    const { onboarding, loading } = useContext(AuthContext);

    if(loading) {
        return null;
    }

    if(!onboarding) return <OnBoarding />
    
    return (
        <AppRoutes />
    )   
}