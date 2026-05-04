import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { styles } from './styles/main';
import { View, Text } from 'react-native';

import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

export default function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <View style={styles.container}>

      <Cabecalho mudarPagina={setPagina} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        
        {pagina === "home" ? (
          <Text style={styles.texto}>
            Este aplicativo foi desenvolvido pela Equipe 4 da Escola Cícero Dias.{"\n\n"}
            Aqui serão apresentados códigos feitos durante o trimestre nas aulas de programação,
            incluindo exercícios fáceis, difíceis e aqueles que ajudaram no aprendizado.
          </Text>
        ) : (
          <Text style={styles.texto}>
            Somos a Equipe 4 da Escola Cícero Dias.{"\n\n"}
            Integrantes: Alisson, Willy, Abraão e Daniela.{"\n\n"}
            Cada integrante participou do desenvolvimento do projeto, criando componentes,
            organizando o código e ajudando na estrutura do aplicativo.
          </Text>
        )}

      </View>

      <Rodape />

      <StatusBar style="auto" />
    </View>
  );
}