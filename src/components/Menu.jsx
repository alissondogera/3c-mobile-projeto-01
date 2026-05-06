import { View } from "react-native";
import Botao from "./Botao";

export default function Menu({ alunos, setAlunoSelecionado }) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {alunos.map((aluno, i) => (
        <Botao
          key={i}
          aluno={aluno}
          onPress={() => setAlunoSelecionado(aluno)}
        />
      ))}
    </View>
  );
}