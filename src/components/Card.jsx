import { View, Text } from "react-native";

export default function Card({ conteudo }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>Fácil:</Text>
      <Text>{conteudo.facil}</Text>

      <Text>Difícil:</Text>
      <Text>{conteudo.dificil}</Text>

      <Text>Aprendizado:</Text>
      <Text>{conteudo.aprendizado}</Text>

      <Text>Não ajudou:</Text>
      <Text>{conteudo.inutil}</Text>
    </View>
  );
}