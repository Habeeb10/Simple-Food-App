import { StyleSheet } from "react-native";
import * as colors from "../../component/common/colors";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  use: {
    fontSize: 15,
    marginTop: 60,
  },
  pass: {
    fontSize: 15,
    marginTop: 30,
  },
  con: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  city: {
    flexDirection: "row",
  },
  forget: {
    fontSize: 15,
    color: colors.orange,
  },
  remember: {
    fontSize: 15,
    marginLeft: 10,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  cle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.orange,
  },

  new: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  up: {
    color: colors.orange,
    marginLeft: 5,
  },
});
