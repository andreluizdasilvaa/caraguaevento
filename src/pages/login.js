import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';	

export default function Login() {
    const navigation = useNavigation();
    const [isRegister, setIsRegister] = useState(false);

    function handleRegister() {
        if(isRegister === true) {
            navigation.navigate('RegisterBusiness'); // Navigate to RegisterBusiness screen
        } 
        setIsRegister(true);
    }

    function handleGoBack() {
        if(isRegister === true) {
            setIsRegister(false);
        } else {
            navigation.reset({
                index: 0, // Reset the navigation stack
                routes: [{ name: 'MainHome' }] // Navigate to Home screen
            }) // Navigate back to the previous screen
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity 
                style={{ position: 'absolute', top: 20, left: 20, paddingTop: 10 }} 
                onPress={() => handleGoBack()}
            >
                <Ionicons name="return-up-back-outline" size={40} color="black" />
            </TouchableOpacity>

            <Image
                source={require("../../assets/Logo.png")}
                style={styles.logo}
            />
            <Text style={styles.TextLogo}>CaraguáEventos</Text>

            <KeyboardAvoidingView 
                style={styles.containerInput}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                {isRegister ? (
                    <TextInput 
                        style={styles.inputDefault}
                        placeholder="Nome"
                    />
                ) : null}

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Email"
                />

                <TextInput 
                    style={styles.inputDefault}
                    placeholder="Senha"
                />

                {isRegister ? (
                    <TextInput 
                        style={styles.inputDefault}
                        placeholder="Confirmar Senha"
                    />
                ) : null}

                <TouchableOpacity style={styles.buttonDefault}>
                    <Text style={styles.textButtonDefault}>{isRegister ? 'Cadastrar' : 'Entrar' }</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <View style={styles.contentLineDot}>
                <View style={styles.line}/>
                <View style={styles.dot}/>
                <View style={styles.line}/>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 20 }}>
                <Text style={{ color: '#ccc', fontSize: 16}}>
                    
                    {isRegister ? "É uma empresa? " : "Não possui login?"}
                </Text>
                <TouchableOpacity>
                    <Text 
                        style={{ color: '#313B72', fontSize: 16, fontWeight: 'bold' }}
                        onPress={() => handleRegister()}
                    >
                        {isRegister ? "Cadastre aqui" : " Criar Conta"}
                    </Text>
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
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
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
        marginTop: 50,
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
    contentLineDot: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    line: {
        height: 1,
        backgroundColor: '#000',
        width: '30%',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    }
})