import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Details({ route }) {
  const { avatar, email, first_name, last_name } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={{
          uri: avatar,
        }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.name}>
          <Text style={styles.first}>
            {first_name}
            {""}{" "}
          </Text>
          <Text style={styles.last}>{last_name}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.email}>{email}</Text>
      <View style={styles.content}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  last: {
    color: "gray",
  },
  first: {
    color: "gray",
  },
  email: {
    marginLeft: 10,
    marginTop: 10,
  },
  name: {
    marginTop: 50,
    flexDirection: "row",
    marginLeft: 10,
  },
  image: {
    height: 500,
    width: 400,
  },
  container: {
    flex: 1,
  },
});
