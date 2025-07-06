import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/auth';
import CardEvento from '../components/CardEvento';
import apiEventos from '../constants/apiEventos';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Perfil() {
    const { signed } = useContext(AuthContext);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            if (!signed) {
                navigation.navigate('Login'); // Redireciona para a página de Login
            }
        }, [signed, navigation])
    );

    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.header} />
                
            <View style={styles.cardUser}>
                <Image 
                    source={require('../assets/prefeitura.jpg')}
                    style={styles.image}
                />
                <Text style={styles.name}>Prefeitura municipal de Caraguatatuba</Text>

                <Text style={styles.descricao}>
                Sede do poder executivo do município de Caraguatatuba, localizado no litoral norte do estado de São Paulo.
                </Text>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={{ marginHorizontal: 'auto', marginVertical: 32}}>
                    <Text style={{ color: '#00A5CF', fontWeight: 'bold', fontSize: 18 }}>Editar Perfil</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 12 }}>Informações:</Text>

                <View style={styles.modalInfo}>  
                    <Text style={styles.descricao}>
                        <Text style={[styles.descricao, { fontWeight: 'bold', textAlign: 'left', color: '#313B72' }]}>
                            Endereço: 
                        </Text>
                        Rua Luiz de, R. Luís Passos Júnior, 50 - Centro, Caraguatatuba - SP, 11660-900
                    </Text>

                    <Text style={styles.descricao}>
                        <Text style={[styles.descricao, { fontWeight: 'bold', textAlign: 'left', color: '#313B72' }]}>
                            Telefone: </Text>
                        (12) 3897-8100
                    </Text>

                    <Text style={styles.descricao}>
                        <Text style={[styles.descricao, { fontWeight: 'bold', textAlign: 'left', color: '#313B72' }]}>
                        Horário de funcionamento: </Text>
                        Segunda a Sexta-feira (08:30 -16:30)
                    </Text>
                </View>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 12 }}>Eventos da empresa:</Text>

                <View style={{ paddingBottom: 16 }}>
                    {apiEventos.map((item) => (
                        <CardEvento signed={signed} key={item.id.toString()} event={item} />
                    ))}
                </View>

                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 24,
                }}>
                    <TouchableOpacity 
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: '#00A5CF',
                            maxWidth: '60%',
                            gap: 14,
                            borderRadius: 24,
                            paddingVertical: 4,
                            paddingHorizontal: 16,
                        }}
                    >
                        <FontAwesome6 name="add" size={30} color="white" />
                        <Text
                            style={{
                                color: '#fff', 
                                fontWeight: 'bold', 
                                textAlign: 'center', 
                                paddingVertical: 8, 
                                fontSize: 18
                            }}>Criar Evento</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style='light' />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        backgroundColor: '#00A5CF',
        height: 200,
        width: '100%'
    },
    cardUser: {
        backgroundColor: '#FFF',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingVertical: 50,
        marginHorizontal: 'auto',
        marginTop: -60,
        borderRadius: 10,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        gap: 6
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        textAlign: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descricao: {
        fontSize: 14, 
        color: '#666', 
        textAlign: 'center',
    },
    modalInfo: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 2,
        gap: 8,
    }
})