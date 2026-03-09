import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import PlayerScoreButtons from "./components/PlayerScoreButtons";

export default function App() {
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [editPlayer1, setEditPlayer1] = useState(false);

  function adicionaPontoJogador1(ponto: number) {
    setPontuacaoJogador1((atual) => atual + ponto);
  }
  function adicionaPontoJogador2(ponto: number) {
    setPontuacaoJogador2((atual) => atual + ponto);
  }

  function restart() {
    setPontuacaoJogador1(0);
    setPontuacaoJogador2(0);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoBranco}>Contador</Text>
      </View>
      <View style={styles.containerJogador1}>
        {!editPlayer1 && (
          <>
            <Text style={styles.textoBranco}>{player1Name}</Text>
            <Ionicons
              name="pencil"
              color="#fff"
              size={24}
              onPress={() => setEditPlayer1(true)}
            ></Ionicons>
          </>
        )}
        {editPlayer1 && (
          <>
            <TextInput
              value={player1Name}
              onChangeText={setPlayer1Name}
              style={styles.input}
            />
            <Ionicons
              name="save"
              color="#fff"
              size={24}
              onPress={() => setEditPlayer1(false)}
            ></Ionicons>
          </>
        )}

        <Text style={[styles.pontuacao, styles.textoBranco]}>
          {pontuacaoJogador1}
        </Text>
        <PlayerScoreButtons
          addScore={adicionaPontoJogador1}
        ></PlayerScoreButtons>
      </View>
      <Pressable>
        <Text style={styles.textoBranco}>Restart</Text>
      </Pressable>
      <View style={styles.containerJogador2}>
        <Text style={styles.textoBranco}>{player2Name}</Text>
        <TextInput
          value={player2Name}
          onChangeText={setPlayer2Name}
          style={styles.input}
        />
        <Text style={[styles.pontuacao, styles.textoBranco]}>
          {pontuacaoJogador2}
        </Text>
        <PlayerScoreButtons
          addScore={adicionaPontoJogador2}
        ></PlayerScoreButtons>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
  pontuacao: {
    fontSize: 96,
    fontWeight: "bold",
  },
  containerJogador1: {
    backgroundColor: "#232323",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerJogador2: {
    backgroundColor: "#232323",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBranco: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ff0000",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 16,
  },
});
