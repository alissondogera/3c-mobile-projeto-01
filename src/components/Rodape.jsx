import { View, Text, StyleSheet, Pressable, Linking } from 'react-native'

export default function Rodape() {
  return (
    <View style={styles.rodape}>

      <Text style={styles.texto}>
        Criado por: Alisson, Willy, Abraão e Daniela
      </Text>

      <Pressable
        onPress={() =>
          Linking.openURL("https://github.com/VicCAlq/3c-mobile-projeto-01.git")
        }
      >
        <Text style={styles.link}>
          Ver repositório no GitHub
        </Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  rodape: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#c01111",
    justifyContent: "center",
    alignItems: "center"
  },

  texto: {
    color: "#fff",
    marginBottom: 5
  },

  link: {
    color: "#00ffcc",
    textDecorationLine: "underline"
  }
})