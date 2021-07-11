import React from "react";
import { View, ActivityIndicator } from "react-native";
import { global } from "../../styles/global";

import { styles } from "./styles";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={global.colors.primary} />
    </View>
  );
};

export { Loading };
