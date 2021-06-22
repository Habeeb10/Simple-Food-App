import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Forward } from "../../../assets/svg";
import { Card } from "../../component/card";

export default function User({ navigation }) {
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.error(error)).finally;
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const _renderItem = ({ item }) => {
    const { avatar, email, first_name, last_name } = item;
    return (
      <Card
        imageSource={avatar}
        email={email}
        first_name={first_name}
        last_name={last_name}
        onPress={() =>
          navigation.navigate("details", {
            avatar,
            email,
            first_name,
            last_name,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headbox}>
        <Forward />
        <Text style={styles.heading}>Users List</Text>
      </View>

      {isloading ? (
        <ActivityIndicator color="" style={{ marginTop: 300 }} />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headbox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 40,
  },
  heading: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 100,
  },
  container: {
    flex: 1,
    paddingTop: 25,
  },
});
