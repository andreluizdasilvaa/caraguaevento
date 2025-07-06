import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';  
import Checkbox from 'expo-checkbox';
import PillCard from "./PillCard";
import { SafeAreaView } from "react-native-safe-area-context";

const tagColors = {
    Música: '#FF0000',
    Esporte: '#0000FF',
    Corporativo: '#CCCCCC',
    Cultural: '#FFA500',
    Entretenimento: '#00FFFF',
    Religioso: '#FFFF00',
    Educacional: '#800080',
    Gastronômico: '#FF00FF',
    Ambiental: '#008000',
};

export default function CardEvento({ event, signed }) {
    const [isChecked, setChecked] = useState(event.areInterested);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={{ color: '#313B72' }}>{event.date.inicio} a {event.date.fim}</Text>
            </View>

            <Image 
                source={event.image}
                style={styles.image}
            />

            <Text
                style={{
                    paddingVertical: 6
                }}
                numberOfLines={3} 
                ellipsizeMode="tail" 
            >
                {event.description}
            </Text>

            <View 
                style={{ 
                    width: '100%',
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    gap: 6,
                }}
            >
                {event.tags.map((tag, index) => (
                    <PillCard key={index} text={tag} borderColor={tagColors[tag] || '#000'} />
                ))}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Image
                        source={event.organizer.avatar}
                        style={styles.Avatarimage}
                    />

                    <Text 
                        style={{ 
                            fontWeight: 'medium', 
                            fontSize: 16,
                            maxWidth: 140
                        }}
                        numberOfLines={1} 
                        ellipsizeMode="tail" 
                    >
                        {event.organizer.name}
                    </Text>
                </TouchableOpacity>

                {signed ? (
                    <TouchableOpacity style={{ flexDirection: 'row', gap: 6}} onPress={() => setChecked(!isChecked)}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            color={isChecked ? '#ccc' : undefined}
                        />
                        <Text style={{ fontWeight: 'bold' }}>Tenho Interesse</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        gap: 8,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#F5EDF0',
        marginBottom: 16,
        elevation: 5
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#313B72',
        textDecorationLine: 'underline'
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 12
    },
    Avatarimage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});