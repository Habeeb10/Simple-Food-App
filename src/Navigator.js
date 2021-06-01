import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./sreens/login";
import Signup from "./sreens/signup";
import Order from "./sreens/order";
import Select from "./sreens/select";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="select" component={Select} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
