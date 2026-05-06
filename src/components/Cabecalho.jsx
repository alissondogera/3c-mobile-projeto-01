import { View, Button } from "react-native";

export default function Cabecalho({ setPagina }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button title="Principal" onPress={() => setPagina("principal")} />
      <Button title="Sobre a equipe" onPress={() => setPagina("sobre")} />
    </View>
  );
}