import { StyleSheet } from "react-native";
import * as colors from "../../component/common/colors";

export const SignupStyles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  top: {
    backgroundColor: colors.orange,
    width: "10%",
    height: 5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 3,
  },
  here: {
    alignSelf: "center",
    marginTop: 30,
  },
  click: {
    color: colors.orange,
  },
  conf: {
    backgroundColor: colors.lightorange,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    height: 50,
    width: "90%",
    alignSelf: "center",
  },
  confirm: {
    fontSize: 15,
    color: colors.orange,
    fontWeight: "bold",
  },
  proceed: {
    color: colors.gray,
    alignSelf: "center",
    width: "70%",
    textAlign: "center",
    marginTop: 15,
  },
  default: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  modalBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    height: 479,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  email: {
    fontSize: 15,
    marginTop: 30,
  },
  use: {
    fontSize: 15,
    marginTop: 60,
  },
  pass: {
    fontSize: 15,
    marginTop: 30,
  },

  signup: {
    marginTop: 40,
    backgroundColor: colors.orange,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: colors.white,
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
