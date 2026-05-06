import { View, Text, TouchableOpacity } from "react-native";

export default function Cabecalho({ mudarPagina }) {
  return (
    <View>
      <Text>Vitrine de Códigos</Text>

      <TouchableOpacity onPress={() => mudarPagina("home")}>
        <Text>Principal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => mudarPagina("sobre")}>
        <Text>Sobre a equipe</Text>
      </TouchableOpacity>
    </View>
  );
}
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/main";

export default function Cabecalho({ mudarPagina }) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>Vitrine de Códigos</Text>

      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.botaoNav}
          onPress={() => mudarPagina("home")}
        >
          <Text style={styles.textoBotao}>Principal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoNav}
          onPress={() => mudarPagina("sobre")}
        >
          <Text style={styles.textoBotao}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}