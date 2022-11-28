import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Profile } from "../screens";

const Stack = createNativeStackNavigator();

export default function PorfileStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} />
      </Stack.Navigator>
    );
  }
