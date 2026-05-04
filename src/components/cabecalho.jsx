import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Cabecalho({ mudarPagina }) {
  const [selecionado, setSelecionado] = useState("home");

  return (
    <View style={styles.cabecalho}>

      <Pressable
        style={[
          styles.botao,
          selecionado === "home" && styles.botaoAtivo
        ]}
        onPress={() => {
          setSelecionado("home");
          mudarPagina("home");
        }}
      >
        <Text style={styles.texto}>Página principal</Text>
      </Pressable>

      <Pressable
        style={[
          styles.botao,
          selecionado === "sobre" && styles.botaoAtivo
        ]}
        onPress={() => {
          setSelecionado("sobre");
          mudarPagina("sobre");
        }}
      >
        <Text style={styles.texto}>Sobre a equipe</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#333",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  botao: {
    backgroundColor: "#111",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },

  botaoAtivo: {
    backgroundColor: "#246",
  },

  texto: {
    color: "#fff",
  },
})