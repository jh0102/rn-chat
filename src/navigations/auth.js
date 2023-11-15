import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Auth = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: theme.text,
          headerLeft: ({ onPress, tintColor }) => {
            return (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={30}
                color={tintColor}
                onPress={onPress}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
