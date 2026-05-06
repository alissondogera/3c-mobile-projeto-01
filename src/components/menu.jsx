import { View, StyleSheet } from 'react-native'
import Botao from './Botao'

const EstilosMenu = StyleSheet.create({
  menu: {
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
    width: 200,
  },
  botaoMenu: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  }
})

export default function Menu({
  alunoSelecionado, 
  setAluno, 
  setCodigo, 
  codigoAlisson, 
  codigoWilly, 
  codigoDani, 
  codigoAbraao
}) {
  return (
    <View style={EstilosMenu.menu}>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Alisson" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoAlisson} estilos={EstilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Willy" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoWilly} estilos={EstilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Dani" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoDani} estilos={EstilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Abraão" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoAbraao} estilos={EstilosMenu}/>
    </View>
  )
}