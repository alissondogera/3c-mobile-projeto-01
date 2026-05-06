import { View, Text } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'

export default function Card() {

  const codigoAlisson = <Text>Código do Alisson</Text>
  const codigoWilly = <Text>Código do Willy</Text>
  const codigoDani = <Text>Código do Dani</Text>
  const codigoAbraao = <Text>Código do Abraão</Text>

  const [alunoSelecionado, setAlunoSelecionado] = useState("Alisson")
  const [codigo, setCodigo] = useState(codigoAlisson)

  return(
    <View style={{ flexDirection: "row", padding: 20 }}>
      
      <Menu
        alunoSelecionado={alunoSelecionado}
        setAluno={setAlunoSelecionado}
        setCodigo={setCodigo}
        codigoAlisson={codigoAlisson}
        codigoWilly={codigoWilly}
        codigoDani={codigoDani}
        codigoAbraao={codigoAbraao}
      />

      <View style={{ marginLeft: 20 }}>
        <Text style={{ color: "#fff" }}>
          Códigos de {alunoSelecionado}:
        </Text>
        {codigo}
      </View>

    </View>
  )
}