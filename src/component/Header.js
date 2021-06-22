import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as colors from "./common/colors";

export const Header = ({ title, style, header }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    marginBottom: 20,
    marginLeft: 5,
    color: colors.lightgray,
    marginTop: 7,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 240,
  },
});
