import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login/login";
import Signup from "./screens/signup/signup";
import Order from "./screens/order/order";
import Select from "./screens/select/select";
import User from "./screens/user/user";
import Details from "./screens/details/details";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="select" component={Select} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
