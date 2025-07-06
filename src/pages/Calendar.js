import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { StatusBar } from "expo-status-bar";
import apiEventos from "../constants/apiEventos";
import CardEvento from "../components/CardEvento";

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

export default function Calendario() {
    const [selected, setSelected] = useState('');

    const [eventosFiltrados, setEventosFiltrados] = useState([]);

    useEffect(() => {
        const selectedDayMonth = selected
            ? new Date(selected).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
            : '';
    
            const eventos = apiEventos.filter(evento => 
                evento.date.inicio === selectedDayMonth
            );
        setEventosFiltrados(eventos);
    }, [selected]);
    

    return (
        <ScrollView style={styles.container}>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                style={styles.calendar}
            />

            <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>
                Eventos do dia ({selected}):
            </Text>

            <View style={{ paddingBottom: 16 }}>
                {eventosFiltrados.length > 0 ? (
                    eventosFiltrados.map((item) => (
                        <CardEvento signed={false} key={item.id.toString()} event={item} />
                    ))
                ) : (
                    <Text style={{ textAlign: 'center', color: '#888' }}>
                        Nenhum evento encontrado para esta data.
                    </Text>
                )}
            </View>

            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginTop: 80,
        elevation: 4,
        shadowColor: '#000',
    }
});