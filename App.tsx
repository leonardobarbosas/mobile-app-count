import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import PlayerScoreButtons from "./components/PlayerScoreButtons";
import SaveName from "./components/SaveName";

export default function App() {
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);

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
        <SaveName />

        <Text style={[styles.pontuacao, styles.textoBranco]}>
          {pontuacaoJogador1}
        </Text>
        <PlayerScoreButtons
          addScore={adicionaPontoJogador1}
        ></PlayerScoreButtons>
      </View>

      <Pressable onPress={restart}>
        <Text style={styles.textoBranco}>Restart</Text>
      </Pressable>

      <View style={styles.containerJogador2}>
        <SaveName />
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
});
