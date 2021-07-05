import React from "react";
import { View, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { global } from "../../styles/global";

interface IImage {
  urlImage: string;
}

const Avatar: React.FC<IImage> = ({ urlImage }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[global.colors.secondary50, global.colors.secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};

export { Avatar };
