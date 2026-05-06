import { useState } from "react";
import { View } from "react-native";
import Cabecalho from "./src/components/Cabecalho";
import Rodape from "./src/components/Rodape";
import Menu from "./src/components/Menu";
import Card from "./src/components/Card";
import Conteudo from "./src/components/Conteudo";

export default function App() {
  const [pagina, setPagina] = useState("principal");
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const alunos = [
    {
      nome: "Aluno 1",
      foto: "https://via.placeholder.com/100",
      funcao: "Programou o Botao",
      codigos: {
        facil: "let x = 2 + 2;",
        dificil: "while(true){}",
        aprendizado: "function soma(a,b){return a+b}",
        inutil: "// nada"
      }
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      <Cabecalho setPagina={setPagina} />

      {pagina === "principal" ? (
        <>
          <Menu alunos={alunos} setAlunoSelecionado={setAlunoSelecionado} />
          {alunoSelecionado && <Card conteudo={alunoSelecionado.codigos} />}
        </>
      ) : (
        <Conteudo alunos={alunos} />
      )}

      <Rodape />
    </View>
  );
}