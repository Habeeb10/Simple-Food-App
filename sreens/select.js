import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const SelectList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    foodImage: require("../burger.png"),
  },
  {
    foodName: "Jollof Rice",
    toppings: "Grilled Chicken, Veggies & Sauce",
    foodImage: require("../rice.png"),
  },
];

const ItemCard = ({ foodName, toppings, foodImage }) => {
  return (
    <View style={styles.items}>
      <Image style={styles.img} source={foodImage} />
      <Text style={styles.cheese}>{foodName} </Text>
      <Text style={styles.top}>{toppings} </Text>
    </View>
  );
};

export default Select = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.conf}
        onPress={() => navigation.navigate("order")}
      >
        <Image style={styles.cat} source={require("../cat.png")} />
      </TouchableOpacity>

      <Text style={styles.hello}>Hello, John</Text>
      <Text style={styles.day}>Select your meal for the day</Text>

      <View style={styles.search}>
        <Image style={styles.age} source={require("../Shape.png")} />
        <TextInput style={styles.log} placeholder="search for meals, dishes" />
      </View>

      {SelectList.map((item) => (
        <ItemCard
          foodImage={item.foodImage}
          foodName={item.foodName}
          toppings={item.toppings}
        />
      ))}
      <View style={styles.recall}>
        <Text style={styles.reco}>Recommended</Text>
        <Text style={styles.vew}>View all</Text>
      </View>
      <View style={styles.last}>
        <Image style={styles.last1} source={require("../chees.png")} />
        <Image style={styles.last1} source={require("../pizza.png")} />
        <Image style={styles.last1} source={require("../turkey.png")} />
        <Image style={styles.last1} source={require("../soup.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cat: {
    alignSelf: "flex-end",
    marginTop: 40,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  last1: {
    width: 70,
    borderRadius: 10,
    height: 70,
  },
  recall: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  reco: {
    fontWeight: "bold",
  },
  log: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    letterSpacing: 1,
  },
  search: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    width: "100%",
    borderRadius: 4,
    height: 41,
    paddingLeft: 10,
    alignItems: "center",
    paddingRight: 10,
  },
  hello: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },

  container: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#E5E5E5",
  },
  items: {
    // alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  img: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
  },
  cheese: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },
  top: {
    marginTop: 5,
    marginLeft: 15,
  },
});
