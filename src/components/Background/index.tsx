import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { global } from "../../styles/global";

interface IBackground {
  children: ReactNode;
}

const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[global.colors.secondary80, global.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
};

export { Background };
