import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Tick } from "../../assets/svg";
import * as colors from "./common/colors";

export const CustomInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  isActive,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputbox, isActive && styles.color]}>
        <TextInput
          value={value}
          keyboardType={type}
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor="black"
          onChangeText={onChange}
          secureTextEntry={secure}
        />
        {isActive ? (
          <View style={styles.tickbox}>
            <Tick />
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  color: {
    borderColor: colors.orange,
  },
  inputbox: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  tickbox: {
    width: 18,
    height: 18,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 15,
    color: colors.gray,
  },
  container: {
    marginTop: 10,
  },
  input: {
    width: "90%",
    color: colors.black,
    marginRight: 15,
  },
});
