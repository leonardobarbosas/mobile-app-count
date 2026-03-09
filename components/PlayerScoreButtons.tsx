import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import GameButton from "./GameButton";

interface PlayerScoreButtonsProps {
  addScore: (value: number) => void;
}

const PlayerScoreButtons = ({ addScore }: PlayerScoreButtonsProps) => {
  return (
    <View>
      <GameButton text={"-1"} onPress={() => addScore(-1)}></GameButton>
      <GameButton text={"+1"} onPress={() => addScore(+1)}></GameButton>
      <GameButton text={"+5"} onPress={() => addScore(+5)}></GameButton>
      <GameButton text={"+10"} onPress={() => addScore(+10)}></GameButton>
    </View>
  );
};

export default PlayerScoreButtons;

const styles = StyleSheet.create({});
