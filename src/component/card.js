import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Card = ({
  imageSource,
  first_name,
  last_name,
  email,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <Image
        style={{ width: 60, height: 60 }}
        source={{
          uri: imageSource,
        }}
        resizeMode="contain"
      />
      <View style={{ marginLeft: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Text>
            {first_name} {""}
          </Text>
          <Text>{last_name}</Text>
        </View>

        <Text> {email}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",

    backgroundColor: "orange",
    width: "95%",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    marginLeft: 10,
    marginTop: 20,
    height: 100,
  },
});
