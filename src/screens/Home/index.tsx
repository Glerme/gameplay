import React from "react";
import { View } from "react-native";

import { Profile } from "../../components/Profile";

import { styles } from "./styles";

// CONTINUAR AULA EM 1:15:07

const Home: React.FC = () => {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  );
};

export { Home };
