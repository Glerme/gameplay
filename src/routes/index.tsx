import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Auth } from "./auth.routes";

import { Background } from "../../src/components/Background";

const Routes: React.FC = () => {
  return (
    <Background>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </Background>
  );
};

export { Routes };
