import { View, Text } from "react-native";

export default function Conteudo({ alunos }) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>Equipe:</Text>

      {alunos.map((a, i) => (
        <Text key={i}>
          {a.nome}: {a.funcao}
        </Text>
      ))}
    </View>
  );
}