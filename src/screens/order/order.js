import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../../component/Button";
import { OrderStyles as styles } from "./orderstyles";

const OrderList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    price: "2000",
    foodImage: require("../../../assets/chees.png"),
    delImage: require("../../../assets/delete.png"),
  },
  {
    foodName: "Large Pizza",
    toppings: "Extra Cheese & Toppings",
    price: "2070",
    foodImage: require("../../../assets/pizza.png"),
    delImage: require("../../../assets/delete.png"),
  },
  {
    foodName: "Grilled Turkey",
    toppings: "Sauce and Pepper",
    price: "3500",
    foodImage: require("../../../assets/turkey.png"),
    delImage: require("../../../assets/delete.png"),
  },
  {
    foodName: "Peppersoup",
    toppings: "Beef & Mutton",
    price: "4000",
    foodImage: require("../../../assets/soup.png"),
    delImage: require("../../../assets/delete.png"),
  },
];

const ItemCard = ({ foodImage, foodName, toppings, price, delImage }) => {
  return (
    <View style={styles.itemCont}>
      <View style={styles.leftBox}>
        <Image style={styles.img} source={foodImage} />
        <View>
          <Text style={styles.cheese}>{foodName} </Text>
          <Text style={styles.toppings}>{toppings} </Text>
        </View>
      </View>
      <View style={styles.rightBox}>
        <View>
          <Text style={{ marginRight: 15 }}>{`NGN ${price}`} </Text>
        </View>
        <View style={styles.imgbox}>
          <Image style={styles.img} source={delImage} />
        </View>
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
      <Button title="CHECKOUT" onPress={() => navigation.navigate("login")} />
    </View>
  );
};
