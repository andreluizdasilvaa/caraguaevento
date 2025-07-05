import { useContext } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { AuthContext } from '../context/auth';

export default function PageCarousel({ data, width, scrollTo, isLastPage }) {
  const { finishOnboarding } = useContext(AuthContext);

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Logo.png")}
          style={[styles.image, { width: 70, height: 70 }]}
        />
        <Text style={styles.TextLogo}>CaraguaEventos</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View
        style={[
          styles.contentButton,
          { marginRight: isLastPage === true ? "auto" : 0 }
        ]}
      >
        {!isLastPage ? (
            <TouchableOpacity style={styles.buttonNext} onPress={scrollTo}>
                <Text style={styles.textButtonNext}>Proximo</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={() => finishOnboarding()}>
                <Text style={[styles.textButtonNext, { textDecorationLine: 'underline'}]}>Acessar</Text>
            </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 32,
  },
  image: {
    resizeMode: "contain",
  },
  content: {
    width: "100%",
    gap: 12,
  },
  title: {
    fontSize: 24,
    color: "#2E2F2F", // azul forte
    fontFamily: "Roboto-Bold",
    fontWeight: 'bold',
    fontSize: 38
  },
  description: {
    color: "#2E2F2F", // azul escuro
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  contentButton: {
    marginTop: "auto",
    marginLeft: "auto",
  },
  TextLogo: {
    fontSize: 24,
    color: "#313B72",
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  textButtonNext: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
