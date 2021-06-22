import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CustomInput } from "../../component/Input";
import { Header } from "../../component/Header";
import { LoginStyles as styles } from "./loginstyles";
import { Button } from "../../component/Button";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header header="Welcome Back!" title="Login to your account" />

      <CustomInput label="Username" isActive />
      <CustomInput label="Password" />
      <View style={styles.con}>
        <View style={styles.city}>
          <TouchableOpacity style={styles.circle}>
            <View style={styles.checkedCircle} />
            <TouchableOpacity style={styles.cle}>
              <View style={styles.checkedCircle} />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <Text style={styles.forget}>Forgot Password?</Text>
      </View>
      <View>
        <Button title="Login" onPress={() => navigation.navigate("select")} />
      </View>

      <View style={styles.new}>
        <Text style={styles.user}>New user?</Text>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.up}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
