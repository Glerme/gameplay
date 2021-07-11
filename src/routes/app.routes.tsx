import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Create } from "../screens/Create";

import { global } from "../styles/global";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      headerMode={"none"}
      screenOptions={{
        cardStyle: {
          backgroundColor: global.colors.secondary100,
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
      <Screen name="Create" component={Create} />
    </Navigator>
  );
};
