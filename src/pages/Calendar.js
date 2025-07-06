import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StatusBar } from "expo-status-bar";
import apiEventos from "../constants/apiEventos";
import CardEvento from "../components/CardEvento";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/auth";

// Configurações em português
LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    dayNames: [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ],
    dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

// Cores das tags
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

export default function Calendario() {
    const { signed } = useContext(AuthContext);
    const [selected, setSelected] = useState(new Date().toISOString().split('T')[0]);
    const [selectedDayMonth, setSelectedDayMonth] = useState('');
    const [eventosFiltrados, setEventosFiltrados] = useState([]);
    const [markedDates, setMarkedDates] = useState({});

    // Função para converter data DD/MM para YYYY-MM-DD
    const convertDateToISO = (dateString) => {
        const [day, month] = dateString.split('/');
        const currentYear = new Date().getFullYear();
        return `${currentYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    useEffect(() => {
        const selectedDayMonth = selected
            ? new Date(selected).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
            : '';
        setSelectedDayMonth(selectedDayMonth);

        const eventos = apiEventos.filter(evento => 
            evento.date.inicio === selectedDayMonth
        );
        setEventosFiltrados(eventos);
    }, [selected]);

    // Criar marcações para eventos
    useEffect(() => {
        const eventMarkers = {};
        
        apiEventos.forEach(evento => {
            const eventDate = convertDateToISO(evento.date.inicio);
            const firstTag = evento.tags[0];
            const tagColor = tagColors[firstTag] || '#000000';
            
            // Se já existe uma marcação para esta data, adicione mais uma barra
            if (eventMarkers[eventDate]) {
                eventMarkers[eventDate].periods.push({
                    startingDay: true,
                    endingDay: true,
                    color: tagColor,
                });
            } else {
                // Primeira marcação para esta data
                eventMarkers[eventDate] = {
                    periods: [
                        {
                            startingDay: true,
                            endingDay: true,
                            color: tagColor,
                        }
                    ]
                };
            }
        });

        // Adicionar seleção atual
        const finalMarkedDates = {
            ...eventMarkers,
            [selected]: {
                ...eventMarkers[selected],
                selected: true,
                selectedColor: '#00A5CF',
            }
        };

        setMarkedDates(finalMarkedDates);
    }, [selected]);

    return (
        <ScrollView>
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
                </View>
            </SafeAreaView>

            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>
                    Calendario de Eventos
                </Text>

                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={markedDates}
                    markingType={'multi-period'}
                    style={styles.calendar}
                />

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>
                    Eventos do dia ({ selectedDayMonth }):
                </Text>

                <View style={{ paddingBottom: 16 }}>
                    {eventosFiltrados.length > 0 ? (
                        eventosFiltrados.map((item) => (
                            <CardEvento signed={signed} key={item.id.toString()} event={item} />
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', color: '#888' }}>
                            Nenhum evento encontrado para esta data.
                        </Text>
                    )}
                </View>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        elevation: 4,
        shadowColor: '#000',
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
});