import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { Login } from "../screens";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      </Stack.Navigator>
    );
  }
