import Conteudo from "../components/Conteudo";

export default function Sobre({ equipe }) {
  return <Conteudo equipe={equipe} />;
}
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { styles } from "../styles/main";

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://github.com/seu-repo")}
      >
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>

      <Text>Criado por: Abraão, Alisson, Saniela e Willy</Text>
    </View>
  );
}
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { styles } from "../styles/main";

export default function Rodape() {
  return (
    <View style={styles.rodape}>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://github.com/seu-repo")}
      >
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>

      <Text>Criado por: Abraão, Alisson, Saniela e Willy</Text>
    </View>
  );
}