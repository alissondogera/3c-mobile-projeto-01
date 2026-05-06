import { View, Text, Linking } from "react-native";

export default function Rodape() {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("https://github.com/seu-repo")}
      >
        GitHub
      </Text>
      <Text>Criado por: Nome1, Nome2</Text>
    </View>
  );
}