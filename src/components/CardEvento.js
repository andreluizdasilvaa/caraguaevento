import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';  
import PillCard from "./PillCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardEvento() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>20º Festival da Tainha</Text>
                <Text>09/07 a 11/07</Text>
            </View>

            <Image 
                source={{ uri: 'https://fundacc.sp.gov.br/wp-content/uploads/2025/07/SITE-45-2400x1200.png' }}
                style={styles.image}
            />

            <Text>Tem início na próxima quarta-feira (9/7), às 12h, a 20ª edição do Festival da Tainha, que será realizado na Praça de Eventos do bairro Porto Novo, região sul de Caraguatatuba</Text>

            <View>
                <PillCard text={'olaa'} />
            </View>

            <View>
                
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        gap: 12,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#F5EDF0',
        elevation: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#313B72',
        textDecorationLine: 'underline'
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 12
    }
})