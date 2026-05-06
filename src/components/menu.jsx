import { View } from "react-native";
import Menu from "../components/Menu";
import Card from "../components/Card";

export default function Home({ alunos, alunoSelecionado, setAlunoSelecionado }) {
  return (
    <View>
      <Menu alunos={alunos} selecionarAluno={setAlunoSelecionado} />

      {alunoSelecionado &&
        alunoSelecionado.codigos.map((c, index) => (
          <Card key={index} conteudo={c} />
        ))}
    </View>
  );
} 
