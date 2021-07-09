import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface IListHeader {
  title: string;
  subtitle: string;
}

const ListHeader: React.FC<IListHeader> = ({ subtitle, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export { ListHeader };
