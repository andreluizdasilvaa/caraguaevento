import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function PillCard({ text, borderColor }) {
    return (
        <View style={[styles.container, { borderColor }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 24,
        backgroundColor: '#fff',
        elevation: 3,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#313B72',
        textTransform: 'uppercase',
    }
});