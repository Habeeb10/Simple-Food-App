import { StyleSheet } from "react-native";
import * as colors from "../../component/common/colors";

export const OrderStyles = StyleSheet.create({
  imgbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.deeporange,
  },
  money: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 15,
  },
  tot: {
    marginLeft: 10,
  },

  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 15,
  },
  toppings: {
    marginLeft: 20,
  },
  cheese: {
    fontWeight: "bold",
    marginLeft: 20,
  },
  img: {
    borderRadius: 5,
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
    paddingHorizontal: 15,
    marginTop: 20,
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
    marginLeft: 20,
  },
  cart: {
    marginTop: 5,
    marginBottom: 30,
    marginLeft: 20,
  },
});
