import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Singin } from "../screens/SingIn";

const { Navigator, Screen } = createStackNavigator();

export const Auth = () => {
  return (
    <Navigator
      headerMode={"none"}
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Singin" component={Singin} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
