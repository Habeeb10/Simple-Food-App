import React from "react";
import { Cart, Search } from "../../../assets/svg";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { SelectStyles as styles } from "./selectstyles";

const SelectList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    foodImage: require("../../../assets/burger.png"),
  },
  {
    foodName: "Jollof Rice",
    toppings: "Grilled Chicken, Veggies & Sauce",
    foodImage: require("../../../assets/rice.png"),
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
        <Cart style={styles.cat} />
      </TouchableOpacity>

      <Text style={styles.hello}>Hello, John</Text>
      <Text style={styles.day}>Select your meal for the day</Text>

      <View style={styles.search}>
        <Search />
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
        <Image
          style={styles.last1}
          source={require("../../../assets/chees.png")}
        />
        <Image
          style={styles.last1}
          source={require("../../../assets/pizza.png")}
        />
        <Image
          style={styles.last1}
          source={require("../../../assets/turkey.png")}
        />
        <Image
          style={styles.last1}
          source={require("../../../assets/soup.png")}
        />
      </View>
    </View>
  );
};
