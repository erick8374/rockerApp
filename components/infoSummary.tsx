import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const RockWelcomePage: React.FC = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2016/11/29/09/04/guitar-1869096_1280.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao Mundo do Rock!</Text>
        <Text style={styles.subtitle}>
          Prepare-se para mergulhar no universo dos maiores ícones do Rock!
        </Text>

        <View style={styles.actions}>
          <Button
            mode="contained"
            icon="guitar-electric"
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => console.log("Explorar Cantores")}
          >
            Explorar Cantores
          </Button>

          <Button
            mode="outlined"
            icon="music"
            style={styles.button}
            labelStyle={styles.buttonText}
            textColor="#FFD700"
            onPress={() => console.log("Descobrir Bandas")}
          >
            Descobrir Bandas
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },
  actions: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    marginVertical: 10,
    borderColor: "#FFD700",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RockWelcomePage;
