import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="return-up-back-outline" size={40} color="black" />
                </TouchableOpacity>

                <Image
                    source={require("../../assets/Logo.png")}
                    style={styles.logo}
                />
            </View>

            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                marginBottom: 12,
                fontWeight: 'bold',
            }}>Cadastre sua empresa:</Text>

            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Nome da empresa"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Cnpj"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Área de Atuação"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Endereço Comercial (com CEP)"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Email"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Senha"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Confirmar Senha"
                />


                <TouchableOpacity style={styles.buttonDefault}>
                    <Text style={styles.textButtonDefault}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 50,
        height: 50,
    },
    TextLogo: {
        fontSize: 24,
        color: "#313B72",
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    inputDefault: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 12,
        padding: 14,
    },
    containerInput: {
        alignItems: "center",
        width: '100%',
        gap: 16,
    },
    buttonDefault: {
        backgroundColor: '#000',
        borderRadius: 24,
        width: '50%',
    },
    textButtonDefault: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 12,
        textAlign: 'center',
    },
    header: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        paddingVertical: 32,
        paddingHorizontal: 16,
    }
})