import { TouchableOpacity, Text, Image, View } from "react-native";

export default function Botao({ aluno, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 10 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: aluno.foto }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <Text>{aluno.nome}</Text>
      </View>
    </TouchableOpacity>
  );
}