import { useState } from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'

const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#333",
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  texto: {
    color: "#fff"
  }
})

export default function Cabecalho({ paginaPrincipal, sobreEquipe, mudarPagina }) {
  const [selecionado, setSelecionado] = useState("principal")

  return (
    <View style={estilosCabecalho.cabecalho}>
      <Pressable
        style={[
          estilosCabecalho.botao,
          { backgroundColor: selecionado === "principal" ? "#246" : "#111" }
        ]}
        onPress={() => {
          mudarPagina(paginaPrincipal)
          setSelecionado("principal")
        }}
      >
        <Text style={estilosCabecalho.texto}>Página principal</Text>
      </Pressable>

      <Pressable
        style={[
          estilosCabecalho.botao,
          { backgroundColor: selecionado === "sobreEquipe" ? "#246" : "#111" }
        ]}
        onPress={() => {
          mudarPagina(sobreEquipe)
          setSelecionado("sobreEquipe")
        }}
      >
        <Text style={estilosCabecalho.texto}>Sobre a Equipe</Text>
      </Pressable>
    </View>
  )
}