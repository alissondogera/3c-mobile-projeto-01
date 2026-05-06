import { View, Text } from "react-native";

export default function Conteudo({ equipe }) {
  return (
    <View>
      {equipe.map((membro, index) => (
        <Text key={index}>
          {membro.nome}: {membro.funcao}
        </Text>
      ))}
    </View>
  );
}