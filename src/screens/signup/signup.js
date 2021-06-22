import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { CustomInput } from "../../component/Input";
import { SignupStyles as styles } from "./signupstyles";
import { Button } from "../../component/Button";
import { Header } from "../../component/Header";

export default function Signup({ navigation }) {
  const [modalState, setModalState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Register = () => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          Alert.alert(res.error);
        } else Alert.alert("MY RESPONSE, Registration Successful");
      })
      // .then((data) => console.log(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header
        header="Create your Account"
        title="it's free and easy to setup!"
      />
      <CustomInput label="Email" onChange={setEmail} value={email} />

      <CustomInput label="Password" onChange={setPassword} value={password} />
      <View>
        <Button
          style={styles.signup}
          onPress={() => Register()}
          title="SIGNUP"
          loading={loading}
        />
      </View>

      <View style={styles.new}>
        <Text style={styles.user}>Existing user?</Text>
        <TouchableOpacity
          style={styles.log}
          activeOpacity={0.7}
          onPress={() => setModalState(true)}
        >
          <Text style={styles.up}>Signin</Text>
        </TouchableOpacity>
      </View>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.top}></View>
            <Image
              source={require("../../../assets/myicon.png")}
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
