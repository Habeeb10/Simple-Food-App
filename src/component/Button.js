import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = ({ title, onPress, style, ActivityIndicator }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color="orange"
          style={{ marginTop: 10 }}
        />
      ) : (
        <Text style={styles.login}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E25F38",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: "white",
    fontSize: 14,
  },
});
