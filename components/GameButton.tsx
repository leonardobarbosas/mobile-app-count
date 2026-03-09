import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

interface GameButtonProps {
  text: string;
  onPress: () => void;
}

const GameButton = ({ text, onPress }: GameButtonProps) => {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GameButton;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 24.
  },
  pressable: {
    backgroundColor: "#ff0000"
  }
});
