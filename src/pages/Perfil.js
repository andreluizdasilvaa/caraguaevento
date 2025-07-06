import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    Button
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
    const navigate = useNavigation();
    return (
        <SafeAreaView>
            <Text>Perfil</Text>

            {/* Fazer esse botão desaparecer quando o usuário estiver logado */}
            <Button
                title="Fazer Login"
                onPress={() => navigate.navigate('Login')}
            />
        </SafeAreaView>
    )
}