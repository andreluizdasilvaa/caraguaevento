import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function PillCard({ text }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    },
    text: {

    }
});