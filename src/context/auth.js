import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState('andré');
    const [loading, setLoading] = useState(true);
    const [onboarding, setOnboarding] = useState(false);

    useEffect(() => {
        async function LoadStorage() {
            const storageOnboarding  = await AsyncStorage.getItem('@Onboarding');

            if(storageOnboarding === 'true') {
                setOnboarding(true);
                setLoading(false);
            } else {
                setOnboarding(false);
                setLoading(false);
            }
        }

        LoadStorage();
    }, []);

    // Função para finalizar o onboarding
    async function finishOnboarding() {
        await AsyncStorage.setItem('@Onboarding', 'true');
        setOnboarding(true);
    }


    return (
        <AuthContext.Provider value={{ 
                signed: !!user, 
                user,
                loading,
                onboarding,
                finishOnboarding
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;