import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CardEvento from "../components/CardEvento";

export default function Home() {
    const navigate = useNavigation();
    

    return (
        <ImageBackground 
            source={require('../assets/background_splash.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        > 
        
            <SafeAreaView style={styles.header}>
                <View 
                    style={{ 
                        width: '100%',
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'space-between' 
                    }}
                >
                    <View 
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
                    >
                        <Image 
                            source={require('../../assets/Logo.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.TextLogo}>CaraguáEventos</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigate.navigate('Notify')}>
                        <Ionicons name="notifications-outline" size={40} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerInput}>

                    <View style={styles.contentInput}>

                        <TouchableOpacity>
                            <FontAwesome5 name="search" size={24} color="black" />
                        </TouchableOpacity>

                        <TextInput
                            placeholder="Pesquisar Evento..."
                            style={styles.inputSearch}
                            maxLength={190}
                        />
                    </View>
                    
                </View>
            </SafeAreaView>

            <View style={styles.content}>
                <View style={{ flexDirection: 'column', gap: 6 }}>

                    <TouchableOpacity 
                        style={{ 
                            backgroundColor: '#FBFEF9', 
                            paddingVertical: 6, 
                            paddingHorizontal: 12, 
                            alignSelf: 'flex-start',
                            borderRadius: 24,
                            elevation: 5
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#313B72'}}>Tabela de Filtros</Text>
                    </TouchableOpacity>

                    <View 
                        style={{ 
                            flexDirection: 'row', 
                            width: '100%', 
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                     >
                        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Principais Eventos</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Data de edição</Text>
                            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                    <CardEvento />
            </View>

            <StatusBar style="auto" />
        </ImageBackground>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'space-between',
        paddingTop: 24,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff', 
        maxHeight: 200
    },
    TextLogo: {
        fontSize: 24,
        color: "#313B72",
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    containerInput: {
        width: '100%',
    },
    contentInput: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F5EDF0',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    inputSearch: {
        maxWidth: '90%'
    },
    content: {
        marginTop: 20,
        paddingHorizontal: 16
    }
})