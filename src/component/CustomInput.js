import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const CustomInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        keyboardType={type}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="black"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1.5,
    borderColor: "#E25F38",
    color: "black",
    marginBottom: 20,
  },
});
