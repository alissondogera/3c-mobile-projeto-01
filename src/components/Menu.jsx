import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'

export default function Menu({ mudarPagina }) {
  const [selecionado, setSelecionado] = useState("")

  return (
    <View style={styles.menu}>

      <Text style={styles.titulo}>Escolha um integrante:</Text>

      <Pressable
        style={[styles.botao, selecionado === "Alisson" && styles.botaoAtivo]}
        onPress={() => {
          setSelecionado("Alisson")
          mudarPagina("Alisson")
        }}
      >
        <Text style={styles.texto}>Alisson</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, selecionado === "Willy" && styles.botaoAtivo]}
        onPress={() => {
          setSelecionado("Willy")
          mudarPagina("Willy")
        }}
      >
        <Text style={styles.texto}>Willy</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, selecionado === "Abraão" && styles.botaoAtivo]}
        onPress={() => {
          setSelecionado("Abraão")
          mudarPagina("Abraão")
        }}
      >
        <Text style={styles.texto}>Abraão</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, selecionado === "Daniela" && styles.botaoAtivo]}
        onPress={() => {
          setSelecionado("Daniela")
          mudarPagina("Daniela")
        }}
      >
        <Text style={styles.texto}>Daniela</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#222",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center"
  },

  titulo: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10
  },

  botao: {
    backgroundColor: "#111",
    padding: 10,
    margin: 8,
    borderRadius: 8,
    width: "80%",
    alignItems: "center"
  },

  botaoAtivo: {
    backgroundColor: "#246"
  },

  texto: {
    color: "#fff"
  }
})