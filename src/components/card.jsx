import { View, Text } from "react-native";

export default function Card({ conteudo }) {
  return (
    <View>
      <Text>{conteudo.titulo}</Text>
      <Text>{conteudo.codigo}</Text>
      <Text>{conteudo.descricao}</Text>
    </View>
  );
}
import { View, Text } from "react-native";
import { styles } from "../styles/main";

export default function Card({ conteudo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.tituloCard}>{conteudo.titulo}</Text>
      <Text style={styles.codigo}>{conteudo.codigo}</Text>
      <Text style={styles.descricao}>{conteudo.descricao}</Text>
    </View>
  );
}