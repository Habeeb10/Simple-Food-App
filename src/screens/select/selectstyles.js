import { StyleSheet } from "react-native";
import * as colors from "../../component/common/colors";

export const SelectStyles = StyleSheet.create({
  cat: {
    alignSelf: "flex-end",
    marginTop: 20,
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
    fontSize: 14,
    letterSpacing: 1,
    color: colors.black,
  },
  search: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: colors.grey,
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
  },
  items: {
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
