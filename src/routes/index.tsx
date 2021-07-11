import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { Singin } from "../screens/SingIn";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <Singin />}
    </NavigationContainer>
  );
};

export { Routes };
