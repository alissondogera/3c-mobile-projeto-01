import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Botao({ aluno, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: aluno.foto }} style={{ width: 80, height: 80 }} />
      <Text>{aluno.nome}</Text>
    </TouchableOpacity>
  );
}
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "../styles/main";

export default function Botao({ aluno, onPress }) {
  return (
    <TouchableOpacity style={styles.botaoAluno} onPress={onPress}>
      <Image source={{ uri: aluno.foto }} style={styles.imagem} />
      <Text style={styles.nomeAluno}>{aluno.nome}</Text>
    </TouchableOpacity>
  );
}