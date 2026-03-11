import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";



const SaveName = () => {
  const [name, setName] = useState("Player");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View>
      {!isEditing && (
        <View>
          <Text>{name}</Text>
          <Ionicons
            name="pencil"
            color={"#fff"}
            onPress={() => setIsEditing(true)}
          />
        </View>
      )}
      {isEditing && (
        <View>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Ionicons
            name="save-outline"
            color={"#fff"}
            onPress={() => setIsEditing(false)}
            size={24}
          />
        </View>
      )}
    </View>
  );
};

export default SaveName;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#ff0000",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 16,
  },
});
