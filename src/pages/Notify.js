import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notify() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Em breve...</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})