import { View, Text, StyleSheet, Linking } from 'react-native'

const estilos = StyleSheet.create({
  rodape: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1e1e2f",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    color: "#fff"
  },
  link: {
    color: "#6c63ff"
  }
})

export default function Rodape(){
  return(
    <View style={estilos.rodape}>
      <Text style={estilos.texto}>
        feito por Alisson, Willy, Dani e Abraão
      </Text>
      <Text 
        style={estilos.link}
        onPress={() => Linking.openURL("https://github.com/VicCAlq/3c-mobile-projeto-01.git")}
      >
        GitHub
      </Text>
    </View>
  )
}