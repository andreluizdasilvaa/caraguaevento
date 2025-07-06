import { useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    TouchableWithoutFeedback,
    Switch
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import apiEventos from "../constants/apiEventos";
import { Dropdown } from 'react-native-element-dropdown';

import { AuthContext } from "../context/auth";
import CardEvento from "../components/CardEvento";
import Checkbox from "expo-checkbox";

export default function Home() {
    const { signed } = useContext(AuthContext);
    const navigate = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        Música: false,
        Cultural: false,
        Educacional: false,
        Esporte: false,
        Entretenimento: false,
        Gastronômico: false,
        Corporativo: false,
        Religioso: false,
        Ambiental: false,
    });
    const [dropdownValue, setDropdownValue] = useState(null);
    const [accessibilityFilters, setAccessibilityFilters] = useState({
        Visual: false,
        Auditiva: false,
        Psicossocial: false,
        Motora: false,
        Intelectual: false,
        Outras: false,
    });

    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

    const toggleSwitch = () => setIsSwitchEnabled((previousState) => !previousState);

    const dropdownData = [
        { label: 'Balneário Califórnia', value: 'balneario-california' },
        { label: 'Balneário dos Golfinhos', value: 'balneario-dos-golfinhos' },
        { label: 'Barranco Alto', value: 'barranco-alto' },
        { label: 'Capricórnio I', value: 'capricornio-1' },
        { label: 'Capricórnio II', value: 'capricornio-2' },
        { label: 'Capricórnio III', value: 'capricornio-3' },
        { label: 'Caputera', value: 'caputera' },
        { label: 'Centro', value: 'centro' },
        { label: 'Cidade Jardim', value: 'cidade-jardim' },
        { label: 'Indaiá', value: 'indaia' },
        { label: 'Jardim Britânia', value: 'jardim-britania' },
        { label: 'Jardim Gaivotas', value: 'jardim-gaivotas' },
        { label: 'Jaraguazinho', value: 'jaraguazinho' },
        { label: 'Martim de Sá', value: 'martim-de-sa' },
        { label: 'Massaguaçu', value: 'massaguacu' },
        { label: 'Morro do Algodão', value: 'morro-do-algodao' },
        { label: 'Perequê-Mirim', value: 'pereque-mirim' },
        { label: 'Poiares', value: 'poiares' },
        { label: 'Porto Novo', value: 'porto-novo' },
        { label: 'Praia das Palmeiras', value: 'praia-das-palmeiras' },
        { label: 'Prainha', value: 'prainha' },
        { label: 'Sumaré', value: 'sumare' },
        { label: 'Tinga', value: 'tinga' },
        { label: 'Travessão', value: 'travessao' },
        { label: 'Vila Atlântica', value: 'vila-atlantica' },
        { label: 'Vila Ponte Seca', value: 'vila-ponte-seca' },
        { label: 'Verde Mar', value: 'verde-mar' },
      ];

    const toggleFilter = (filter) => {
        setSelectedFilters((prevState) => ({
            ...prevState,
            [filter]: !prevState[filter],
        }));
    };

    const toggleAccessibilityFilter = (filter) => {
        setAccessibilityFilters((prevState) => ({
            ...prevState,
            [filter]: !prevState[filter], // Alterna o valor do filtro
        }));
    };

    const clearFilters = () => {
        setSelectedFilters({
            Música: false,
            Cultural: false,
            Educacional: false,
            Esporte: false,
            Entretenimento: false,
            Gastronômico: false,
            Corporativo: false,
            Religioso: false,
            Ambiental: false,
        });

        setDropdownValue(null);
        setIsSwitchEnabled(false);

        setAccessibilityFilters({
            Visual: false,
            Auditiva: false,
            Psicossocial: false,
            Motora: false,
            Intelectual: false,
            Outras: false,
        });
    };

    return (
        <ImageBackground 
            source={require('../assets/background_splash.png')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        > 
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
                            onPress={() => setModalVisible(true)}
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

                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 12}}>Principais Eventos</Text>
                    </View>

                    <View style={{ paddingBottom: 16 }}>
                        {apiEventos.map((item) => (
                            <CardEvento signed={signed} key={item.id.toString()} event={item} />
                        ))}
                    </View>
                </View>

            </ScrollView>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2E2F2F' }}>Todos os Filtros</Text>
                                <TouchableOpacity onPress={clearFilters}>
                                    <Text style={{ color: '#3E9CF4'}}>Limpar Filtros</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.Line} />

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2E2F2F', marginBottom: 12 }}>Tipo de Evento:</Text>
                            <View style={styles.grid}>
                                {Object.keys(selectedFilters).map((filter) => (
                                    <View key={filter} style={styles.checkboxContainer}>
                                        <Checkbox
                                            value={selectedFilters[filter]} // Define o valor do checkbox com base no estado
                                            onValueChange={() => toggleFilter(filter)} // Atualiza o estado ao clicar
                                            color={selectedFilters[filter] ? '#313B72' : undefined} // Cor do checkbox quando marcado
                                        />
                                        <Text style={styles.checkboxLabel}>{filter}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={styles.Line} />

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2E2F2F', marginBottom: 12 }}>Selecione seu bairro:</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={dropdownData}
                                labelField="label"
                                valueField="value"
                                placeholder="Selecione uma opção"
                                value={dropdownValue}
                                onChange={(item) => setDropdownValue(item.value)}
                            />
                            <View style={styles.Line} />
                            <View style={{ flexDirection: 'column', gap: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2E2F2F', marginBottom: 12 }}>Possui acessibilidade?</Text>
                                <Switch 
                                    value={isSwitchEnabled} 
                                    onValueChange={toggleSwitch}
                                />
                            </View>
                                <View style={styles.grid}>
                                    {Object.keys(accessibilityFilters).map((filter) => (
                                        <View key={filter} style={styles.checkboxContainer}>
                                            <Checkbox
                                                value={accessibilityFilters[filter]} // Define o valor do checkbox com base no estado
                                                onValueChange={() => toggleAccessibilityFilter(filter)} // Atualiza o estado ao clicar
                                                color={accessibilityFilters[filter] ? '#313B72' : undefined} // Cor do checkbox quando marcado
                                            />
                                            <Text style={styles.checkboxLabel}>{filter}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.Line} />
                    
                            {/* Aqui */}

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
    },
    modalContent: {
        width: '100%',
        height: '70%', // 70% da altura da tela
        backgroundColor: '#FFFFFF',
        borderStartStartRadius: 24,
        borderEndStartRadius: 24,
        padding: 16,
        elevation: 5,
    },
    Line: {
        width: '100%',
        height: 2,
        backgroundColor: '#C4C4C4',
        marginVertical: 12,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        width: '45%', // Ajusta o tamanho para caber em duas colunas
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 8,
    },
    dropdown: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        elevation: 2,
    },
});