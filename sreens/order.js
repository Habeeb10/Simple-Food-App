import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const OrderList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    price: "2000",
    foodImage: require("../assets/chees.png"),
    delImage: require("../assets/delete.png"),
  },
  {
    foodName: "Large Pizza",
    toppings: "Extra Cheese & Toppings",
    price: "2070",
    foodImage: require("../assets/pizza.png"),
    delImage: require("../assets/delete.png"),
  },
  {
    foodName: "Grilled Turkey",
    toppings: "Sauce and Pepper",
    price: "3500",
    foodImage: require("../assets/turkey.png"),
    delImage: require("../assets/delete.png"),
  },
  {
    foodName: "Peppersoup",
    toppings: "Beef & Mutton",
    price: "4000",
    foodImage: require("../assets/soup.png"),
    delImage: require("../assets/delete.png"),
  },
];

const ItemCard = ({ foodImage, foodName, toppings, price, delImage }) => {
  return (
    <View style={styles.itemCont}>
      <View style={styles.leftBox}>
        <Image style={styles.img} source={foodImage} />
        <View>
          <Text style={styles.cheese}>{foodName} </Text>
          <Text>{toppings} </Text>
        </View>
      </View>
      <View style={styles.rightBox}>
        <View>
          <Text>{`NGN ${price}`} </Text>
        </View>
        <Image style={styles.img} source={delImage} />
      </View>
    </View>
  );
};

export default Order = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ord}>My Orders</Text>
      <Text style={styles.cart}>
        Welcome to your cart, preview items below.
      </Text>

      {OrderList.map((item) => (
        <ItemCard
          foodImage={item.foodImage}
          foodName={item.foodName}
          toppings={item.toppings}
          price={item.price}
          delImage={item.delImage}
        />
      ))}
      <View style={styles.total}>
        <Text style={styles.tot}>Total:</Text>
        <Text style={styles.money}>{`NGN ${20000}`}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("login")}
        style={styles.log}
      >
        <Text style={styles.login}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  money: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tot: {
    marginLeft: 10,
  },
  log: {
    // marginTop: 30,
    backgroundColor: "#E25F38",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: "white",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cheese: {
    fontWeight: "bold",
  },
  img: {
    borderRadius: 5,
    marginRight: 10,
  },
  leftBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  container: {
    marginTop: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  ord: {
    fontWeight: "bold",
    marginTop: 100,
    fontSize: 40,
  },
  cart: {
    marginTop: 5,
    marginBottom: 30,
  },
});
