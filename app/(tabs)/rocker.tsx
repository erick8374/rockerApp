import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { Card, Avatar, IconButton } from "react-native-paper";
import axios from "axios";

const RockerList = () => {
  const [rockers, setRockers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRockers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://674a14348680202966339ce2.mockapi.io/api/webmob/Rocker"
      );
      setRockers(response.data || []);
    } catch (error) {
      console.error("Erro ao buscar cantores de rock:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRocker = () => {
    // Lógica para adicionar um novo rocker (exibir modal ou redirecionar)
    console.log("Adicionar Rocker clicado!");
  };

  const handleEditRocker = (rockerId) => {
    // Lógica para editar o rocker (exibir modal ou redirecionar)
    console.log(`Editar Rocker com ID: ${rockerId}`);
  };

  const handleDeleteRocker = async (rockerId) => {
    try {
      await axios.delete(
        `https://674a14348680202966339ce2.mockapi.io/api/webmob/Rocker/${rockerId}`
      );
      setRockers((prev) => prev.filter((rocker) => rocker.id !== rockerId));
    } catch (error) {
      console.error("Erro ao deletar rocker:", error);
    }
  };

  useEffect(() => {
    fetchRockers();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎸 Lista de Rockers 🎸</Text>
      <Button title="Adicionar Rocker" color="#FFD700" onPress={handleAddRocker} />

      {rockers.map((rocker) => (
        <Card key={rocker.id} style={styles.card}>
          <Card.Title
            title={rocker.name}
            subtitle={`Instrumento: ${rocker.mainInstrument || "Desconhecido"}`}
            left={(props) => (
              <Avatar.Icon
                {...props}
                icon="guitar-electric"
                color="#000"
                style={styles.avatar}
              />
            )}
          />
          <Card.Content>
            <Text style={styles.text}>
              Nacionalidade: {rocker.nationality || "Desconhecida"}
            </Text>
            <Text style={styles.text}>
              Nascimento:{" "}
              {new Date(rocker.birthDate).toLocaleDateString("pt-BR")}
            </Text>
            {rocker.deathDate && (
              <Text style={styles.text}>
                Falecimento:{" "}
                {new Date(rocker.deathDate).toLocaleDateString("pt-BR")}
              </Text>
            )}
            <Text style={styles.text}>Biografia:</Text>
            <Text style={styles.biography}>
              {rocker.biography || "Sem biografia disponível."}
            </Text>
          </Card.Content>
          <Card.Actions>
            <IconButton
              icon="pencil"
              onPress={() => handleEditRocker(rocker.id)}
            />
            <IconButton
              icon="delete"
              onPress={() => handleDeleteRocker(rocker.id)}
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

export default RockerList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 24,
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#2c2c2c",
    marginBottom: 16,
    borderRadius: 8,
  },
  avatar: {
    backgroundColor: "#b22222",
  },
  text: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 14,
  },
  biography: {
    color: "#d3d3d3",
    fontStyle: "italic",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
});
