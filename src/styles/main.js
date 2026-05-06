import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },

  cabecalho: {
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },

  nav: {
    flexDirection: "row",
    gap: 10,
  },

  botaoNav: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
  },

  textoBotao: {
    fontWeight: "bold",
    color: "#4CAF50",
  },

  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
    gap: 10,
  },

  botaoAluno: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    width: 100,
  },

  imagem: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 5,
  },

  nomeAluno: {
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },

  tituloCard: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  codigo: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    fontFamily: "monospace",
    marginVertical: 5,
  },

  descricao: {
    fontStyle: "italic",
  },

  rodape: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },

  link: {
    color: "blue",
    marginBottom: 5,
  },
});