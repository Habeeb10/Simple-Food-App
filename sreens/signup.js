import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CustomInput } from "../component/CustomInput";

export default function Signup({ navigation }) {
  const [modalState, setModalState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.welcome}>Create your Account</Text>
      <Text style={styles.account}>it's free and easy to setup!</Text>
      <Text style={styles.use}>Username</Text>
      <CustomInput placeHolder="Richard" />
      <Text style={styles.email}>Email</Text>
      <CustomInput />
      <Text style={styles.pass}>Password</Text>
      <CustomInput />
      <TouchableOpacity
        style={styles.signup}
        onPress={() => setModalState(true)}
      >
        <Text style={styles.login}>SIGNUP</Text>
      </TouchableOpacity>
      <View style={styles.new}>
        <Text style={styles.user}>Existing user?</Text>
        <TouchableOpacity
          style={styles.log}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.up}>Signin</Text>
        </TouchableOpacity>
      </View>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.top}></View>
            <Image
              source={require("../assets/myicon.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.default}>Default Wallet Selection</Text>
            <Text style={styles.proceed}>
              If you proceed, All cards transactions will be charged from the
              selected wallet.
            </Text>
            <TouchableOpacity
              style={styles.conf}
              onPress={() => navigation.navigate("select")}
            >
              <Text style={styles.confirm}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.here}
              onPress={() => setModalState(false)}
            >
              <Text style={styles.click}>Click here to cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  top: {
    backgroundColor: "#E0E6ED",
    width: "10%",
    height: 5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 3,
  },
  here: {
    alignSelf: "center",
    marginTop: 30,
  },
  click: {
    color: "#E25F38",
  },
  conf: {
    backgroundColor: "#FDF3F1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    height: 50,
    width: "90%",
    alignSelf: "center",
  },
  confirm: {
    fontSize: 15,
    color: "#E25F38",
    fontWeight: "bold",
  },
  proceed: {
    color: "#9DA8B6",
    alignSelf: "center",
    width: "70%",
    textAlign: "center",
    marginTop: 15,
  },
  default: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  modalBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    height: 479,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 240,
  },
  account: {
    fontSize: 15,
  },
  email: {
    fontSize: 15,
    marginTop: 30,
  },
  use: {
    fontSize: 15,
    marginTop: 60,
  },
  pass: {
    fontSize: 15,
    marginTop: 30,
  },

  signup: {
    marginTop: 40,
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
  },
  new: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  up: {
    color: "#E25F38",
  },
});
